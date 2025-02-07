import React from 'react'
import { useSelector } from 'react-redux'
import {
  isAttentionSelector,
  errorMessageSelector,
  attentionMessageSelector,
  activeChatSelector,
} from '../../../redux/selectors/chats'
import { ModalWindow } from '../ModalWindow'
import { ChatBody } from './styles'
import ActiveChat from '../ActiveChat'
import Placeholder from '../Placeholder'

interface Props {
  idInstance: string
  apiTokenInstance: string
}

const ChatBodyComponent: React.FC<Props> = ({ idInstance, apiTokenInstance }) => {
  const errorMessage = useSelector(errorMessageSelector)
  const attentionMessage = useSelector(attentionMessageSelector)
  const isAttention = useSelector(isAttentionSelector)
  const activeChat = useSelector(activeChatSelector)

  const renderActiveChat = activeChat ? (
    <ActiveChat activeChat={activeChat} apiTokenInstance={apiTokenInstance} idInstance={idInstance} />
  ) : (
    <Placeholder />
  )

  return (
    <ChatBody>
      <ModalWindow isOpen={isAttention} text={errorMessage || attentionMessage} />
      {renderActiveChat}
    </ChatBody>
  )
}

export default ChatBodyComponent
