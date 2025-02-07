import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AvatarWrapper, AvatarImage, InfoBlock, ContactWrapper } from './styles'
import { onActiveChat } from '../../../redux/reducers/chats'
import { useAppDispatch } from '../../../hooks'

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
      <AvatarWrapper>{avatar ? <AvatarImage src={avatar} alt="avatar" /> : <FaUserAlt size={50} />}</AvatarWrapper>

      <InfoBlock>
        <span>{phone}</span>
        <span>{contactName}</span>
      </InfoBlock>
    </ContactWrapper>
  )
}

export default ContactItem
