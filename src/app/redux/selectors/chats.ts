import { RootState } from '../store'

export const isAttentionSelector = (state: RootState) => state.chats.isAttention
export const errorMessageSelector = (state: RootState) => state.chats.errorMessage
export const attentionMessageSelector = (state: RootState) => state.chats.attentionMessage
export const activeChatSelector = (state: RootState) => state.chats.chatsArr.filter((chat) => chat.isActive)[0]
export const chatsArrSelector = (state: RootState) => state.chats.chatsArr
