import React, { FormEvent, KeyboardEvent, useState, ChangeEvent } from 'react'
import axios from 'axios'
import { FiSend } from 'react-icons/fi'
import { useMutation } from 'react-query'
import { Wrapper, InputField, SendButton } from './styles'
import { useAppDispatch } from '../../../hooks'
import { getErrorMessage, updateIsAttention, updateChatDialogArr } from '../../../redux/reducers/chats'
import { Message } from '../../../types/projectTypes'
import { GREEN_API } from '../../../mutations/appMutations'

interface Props {
  activeChatId: string
  idInstance: string
  apiTokenInstance: string
}

const SendPanel: React.FC<Props> = ({ activeChatId, idInstance, apiTokenInstance }) => {
  const dispatch = useAppDispatch()

  const [message, setMessage] = useState('')

  const mutation = useMutation((data: any) =>
    axios.post(`${GREEN_API}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, data),
  )

  const handleChange = (value: string) => {
    setMessage(value)
  }

  const setErrorMessage = (message: string) => {
    dispatch(getErrorMessage(message))
    dispatch(updateIsAttention())
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!message.trim()) return

    const payload = {
      chatId: activeChatId,
      message,
    }

    mutation.mutate(payload, {
      onSuccess: (response) => {
        if (response.status === 200) {
          const newMessage: Message = {
            chatId: activeChatId,
            idMessage: response.data.idMessage,
            class: 'sent',
            status: '',
            text: message,
          }
          dispatch(updateChatDialogArr(newMessage))
        } else {
          throw new Error('Невозможно установить соединение')
        }
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          setErrorMessage(error.message || 'Произошла ошибка при попытке соединения')
        } else {
          setErrorMessage('Неизвестная ошибка')
        }
      },
    })

    setMessage('')
  }

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      await handleSubmit(event.nativeEvent as unknown as FormEvent<HTMLFormElement>)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <InputField
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Введите сообщение..."
        />
        <SendButton type="submit">
          <FiSend size={18} />
        </SendButton>
      </Wrapper>
    </form>
  )
}

export default SendPanel
