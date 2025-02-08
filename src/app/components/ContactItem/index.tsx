import React from 'react'
import { InfoBlock, ContactWrapper } from './styles'
import { onActiveChat } from '../../store/reducers/chats'
import { useAppDispatch } from '../../hooks'
import Avatar from './Avatar'

interface Props {
  contactName: string
  avatar: string
  phone: string
  chatId: string
}

const ContactItem: React.FC<Props> = ({ contactName, avatar, phone, chatId }) => {
  const dispatch = useAppDispatch()

  const handleClick = (chatId: string) => {
    dispatch(onActiveChat(chatId))
  }

  return (
    <ContactWrapper onClick={() => handleClick(chatId)}>
      <Avatar avatar={avatar} />
      <InfoBlock>
        <span>{phone}</span>
        <span>{contactName}</span>
      </InfoBlock>
    </ContactWrapper>
  )
}

export default ContactItem
