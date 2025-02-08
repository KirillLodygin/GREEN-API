import React from 'react'
import { SentMessageMessageWrapper } from './styles'
import CheckIconComponent from './CheckIcon'

interface Props {
  message: string
  status: string
}

const SentMessage: React.FC<Props> = ({ message, status }) => {
  const renderCheckIcon = status ? <CheckIconComponent status={status} /> : null

  return (
    <SentMessageMessageWrapper isread={(status === 'read').toString()}>
      {message}
      {renderCheckIcon}
    </SentMessageMessageWrapper>
  )
}

export default SentMessage
