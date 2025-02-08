import React from 'react'
import { useSelector } from 'react-redux'
import { StyledContacts, Header, ContactList } from './styles'
import { chatsArrSelector } from '../../store/selectors/chats'
import { ChatInfo } from '../../types/projectTypes'
import SearchInput from '../SearchInput'
import ContactItem from '../ContactItem'

const Contacts: React.FC = () => {
  const contacts = useSelector(chatsArrSelector)

  return (
    <StyledContacts>
      <Header>Чаты</Header>
      <SearchInput chatIdsArr={contacts.map((contact) => contact.chatId)} />
      <ContactList>
        {contacts.map((contact: ChatInfo) => (
          <ContactItem
            key={contact.chatId}
            chatId={contact.chatId}
            contactName={contact.contactName}
            avatar={contact.avatar}
            phone={contact.phone}
          />
        ))}
      </ContactList>
    </StyledContacts>
  )
}

export default Contacts
