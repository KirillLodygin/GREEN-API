import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Message, UpdatingMessageData, ChatInfo, ChatsState } from '../../types/projectTypes'

const initialState: ChatsState = {
  errorMessage: '',
  attentionMessage: '',
  isAttention: false,
  chatsArr: [],
}

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    getErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload
    },
    getAttentionMessage(state, action: PayloadAction<string>) {
      state.attentionMessage = action.payload
    },
    updateIsAttention(state) {
      state.isAttention = !state.isAttention
    },
    updateChatsArr(state, action: PayloadAction<ChatInfo>) {
      const chatsArr = JSON.parse(JSON.stringify(state.chatsArr))
      state.chatsArr.forEach((chat) => {
        chat.isActive = false
      })
      chatsArr.unshift(action.payload)
      state.chatsArr = JSON.parse(JSON.stringify(chatsArr))
    },
    onActiveChat(state, action: PayloadAction<string>) {
      const chatsArr = JSON.parse(JSON.stringify(state.chatsArr))
      const index = chatsArr.findIndex((chat: ChatInfo) => chat.chatId === action.payload)
      if (index !== -1) {
        chatsArr.forEach((chat: ChatInfo) => {
          chat.isActive = false
        })
        chatsArr[index].isActive = true
        if (index !== 0) {
          const chat = chatsArr.splice(index, 1)
          chatsArr.unshift(chat[0])
        }
      }
      state.chatsArr = JSON.parse(JSON.stringify(chatsArr))
    },
    updateChatDialogArr(state, action: PayloadAction<Message>) {
      const message = action.payload
      const index = state.chatsArr.findIndex((chat) => chat.chatId === message.chatId)
      if (index === -1) return
      state.chatsArr[index].dialogArr.push(message)
    },
    updateMessageStatus(state, action: PayloadAction<UpdatingMessageData>) {
      const chatIndex = state.chatsArr.findIndex((chat: ChatInfo) => chat.chatId === action.payload.chatId)
      if (chatIndex === -1) return
      const messageIndex = state.chatsArr[chatIndex].dialogArr.findIndex(
        (message: Message) => message.idMessage === action.payload.idMessage,
      )
      if (messageIndex === -1) return
      state.chatsArr[chatIndex].dialogArr[messageIndex].status = action.payload.status
    },
  },
})

export const {
  getErrorMessage,
  getAttentionMessage,
  updateIsAttention,
  updateChatsArr,
  onActiveChat,
  updateChatDialogArr,
  updateMessageStatus,
} = chatsSlice.actions

export default chatsSlice.reducer
