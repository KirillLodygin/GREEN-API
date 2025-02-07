import React from 'react'
import { ChatInfo } from '../../../types/projectTypes'
import ContactItem from '../ContactItem'
import SendPanel from '../SendPanel'
import DialogArea from '../DialogArea'
import { Wrapper, TopSection, MiddleSection, BottomSection } from './styles'

interface Props {
  activeChat: ChatInfo
  idInstance: string
  apiTokenInstance: string
}

const ActiveChat: React.FC<Props> = ({ activeChat, idInstance, apiTokenInstance }) => {
  return (
    <Wrapper>
      <TopSection>
        <ContactItem
          chatId={activeChat.chatId}
          contactName={activeChat.contactName}
          avatar={activeChat.avatar}
          phone={activeChat.phone}
        />
      </TopSection>
      <MiddleSection>
        <DialogArea dialogArr={activeChat.dialogArr} />
      </MiddleSection>
      <BottomSection>
        <SendPanel activeChatId={activeChat.chatId} idInstance={idInstance} apiTokenInstance={apiTokenInstance} />
      </BottomSection>
    </Wrapper>
  )
}

export default ActiveChat
