import React from 'react'
import { Message } from '../../types/projectTypes'
import { DialogAreaWrapper } from './style'
import SentMessage from '../SentMessage'
import ReceivedMessage from '../ReceivedMessage'

interface Props {
  dialogArr: Array<Message>
}

const DialogArea: React.FC<Props> = ({ dialogArr }) => {
  const dialogBody = dialogArr.map((message: Message) =>
    message.class === 'sent' ? (
      <SentMessage key={message.idMessage} message={message.text} status={message.status} />
    ) : (
      <ReceivedMessage key={message.idMessage} message={message.text} />
    ),
  )

  return <DialogAreaWrapper>{dialogBody}</DialogAreaWrapper>
}

export default DialogArea
