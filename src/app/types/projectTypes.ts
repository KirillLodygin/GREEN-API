export type Message = {
  chatId: string
  idMessage: string
  class: 'sent' | 'received'
  status: '' | 'sent' | 'delivered' | 'read'
  text: string
}

export type UpdatingMessageData = {
  chatId: string
  idMessage: string
  status: '' | 'sent' | 'delivered' | 'read'
}

export type ChatInfo = {
  chatId: string
  contactName: string
  avatar: string
  phone: string
  isActive: boolean
  dialogArr: Array<Message>
}

export interface ChatsState {
  errorMessage: string
  attentionMessage: string
  isAttention: boolean
  chatsArr: Array<ChatInfo>
}
