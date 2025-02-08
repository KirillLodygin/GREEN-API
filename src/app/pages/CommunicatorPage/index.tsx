import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'
import { GridContainer, ContactsBlock, ChatBodyBlock } from './styles'
import Contacts from '../../components/Contacts'
import ChatBodyComponent from '../../components/ChatBody'
import { GREEN_API } from '../../../api'
import {
  getErrorMessage,
  updateChatDialogArr,
  updateIsAttention,
  updateMessageStatus,
} from '../../store/reducers/chats'
import { Message, UpdatingMessageData } from '../../types/projectTypes'

const CommunicatorPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [idInstance, setIdInstance] = useState<string>('')
  const [apiTokenInstance, setApiTokenInstance] = useState<string>('')

  const setErrorMessage = (message: string) => {
    dispatch(getErrorMessage(message))
    dispatch(updateIsAttention())
  }

  useEffect(() => {
    const savedIdInstance = Cookies.get('idInstance')
    const savedApiTokenInstance = Cookies.get('apiTokenInstance')

    if (!savedIdInstance || !savedApiTokenInstance) {
      navigate('/')
      return
    }

    if (savedIdInstance && savedApiTokenInstance) {
      setIdInstance(savedIdInstance || '')
      setApiTokenInstance(savedApiTokenInstance || '')
    }
  }, [navigate])

  const processMessage = (responseDataBody: any) => {
    const { senderData, messageData } = responseDataBody
    if (senderData.chatId !== senderData.sender) return
    if (!messageData.textMessageData) return
    const text =
      responseDataBody.messageData.typeMessage !== 'textMessage'
        ? 'Чат пересылает только текстовые сообщения! Вам послали что-то другое!'
        : messageData.textMessageData.textMessage
    const newMessage: Message = {
      chatId: senderData.chatId,
      idMessage: responseDataBody.idMessage,
      class: 'received',
      status: '',
      text: text,
    }
    dispatch(updateChatDialogArr(newMessage))
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function fetchNotifications() {
      try {
        while (!signal.aborted) {
          const response = await axios.get(
            `${GREEN_API}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
            { signal },
          )

          if (response.status === 200 && response.data !== null) {
            const receiptId = response.data.receiptId

            if (response.data.body.senderData) {
              processMessage(response.data.body)
            }

            if (!response.data.senderData) {
              const messageDataObj: UpdatingMessageData = {
                chatId: response.data.body.chatId,
                idMessage: response.data.body.idMessage,
                status: response.data.body.status,
              }
              dispatch(updateMessageStatus(messageDataObj))
            }

            await axios.delete(
              `${GREEN_API}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
              { signal },
            )
          } else if (response.data === null) {
            await new Promise((resolve) => setTimeout(resolve, 10))
          }
        }
      } catch (error) {
        setErrorMessage(`Ошибка при получении уведомлений: ${error}`)
      }
    }

    if (idInstance && apiTokenInstance) {
      fetchNotifications()
    }

    return () => {
      controller.abort()
    }
  }, [idInstance, apiTokenInstance])

  return (
    <GridContainer>
      <ContactsBlock>
        <Contacts />
      </ContactsBlock>
      <ChatBodyBlock>
        <ChatBodyComponent apiTokenInstance={apiTokenInstance} idInstance={idInstance} />
      </ChatBodyBlock>
    </GridContainer>
  )
}

export default CommunicatorPage
