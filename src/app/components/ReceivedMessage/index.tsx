import React from 'react'
import { ReceivedMessageWrapper } from './styles'

interface Props {
  message: string
}

const ReceivedMessage: React.FC<Props> = ({ message }) => <ReceivedMessageWrapper>{message}</ReceivedMessageWrapper>

export default ReceivedMessage
