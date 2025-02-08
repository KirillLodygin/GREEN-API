import { MutationFunction } from 'react-query'
import axios from 'axios'
import Cookies from 'js-cookie'

export const GREEN_API = 'https://1103.api.green-api.com'
const idInstance = Cookies.get('idInstance')
const apiTokenInstance = Cookies.get('apiTokenInstance')
const baseUrl = `${GREEN_API}/waInstance${idInstance}`

type CheckWhatsappPayload = {
  phoneNumber: number
}

type GetContactInfoPayload = {
  chatId: string
}

export const checkWhatsappMutation: MutationFunction<any, CheckWhatsappPayload> = async ({ phoneNumber }) => {
  const url = `${baseUrl}/checkWhatsapp/${apiTokenInstance}`
  const body = { phoneNumber }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axios.post(url, body, config)
  return response.data
}

export const getContactInfoMutation: MutationFunction<any, GetContactInfoPayload> = async ({ chatId }) => {
  const url = `${baseUrl}/GetContactInfo/${apiTokenInstance}`
  const body = { chatId }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const response = await axios.post(url, body, config)
  return response.data
}

export const getSettingsMutation: MutationFunction<any, { id: string; token: string }> = async ({ id, token }) => {
  console.log('id ', id, 'token ', token)
  const url = `${GREEN_API}/waInstance${id}/getSettings/${token}`
  const response = await axios.get(url)
  return response.data
}

export const deleteNotificationMutation: MutationFunction<void, { receiptId: string }> = async ({ receiptId }) => {
  const url = `${baseUrl}/deleteNotification/${apiTokenInstance}/${receiptId}`
  await axios.delete(url)
}

export const receiveNotificationMutation: MutationFunction<any, void> = async () => {
  const url = `${baseUrl}/receiveNotification/${apiTokenInstance}`
  const response = await axios.get(url)
  return response.data
}
