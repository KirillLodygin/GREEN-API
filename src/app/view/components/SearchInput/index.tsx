import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { SearchWrapper, Label, InputField, SearchButton } from './styles'
import { useAppDispatch } from '../../../hooks'
import { ChatInfo } from '../../../types/projectTypes'
import { getErrorMessage, getAttentionMessage, updateIsAttention, updateChatsArr } from '../../../redux/reducers/chats'
import { checkWhatsappMutation, getContactInfoMutation } from '../../../mutations/appMutations'
import { getChatId, convertToRussianPhoneNumber, isDigit } from '../../../utils/'

interface Props {
  chatIdsArr: Array<string>
}

const SearchInput: React.FC<Props> = ({ chatIdsArr }) => {
  const dispatch = useAppDispatch()

  const [contactNumber, setContactNumber] = useState('')

  const setErrorMessage = (message: string) => {
    dispatch(getErrorMessage(message))
    dispatch(updateIsAttention())
  }

  const updateContactNumber = (value: string) => {
    setContactNumber(value)
  }

  const checkWhatsapp = useMutation(checkWhatsappMutation, {
    onSuccess: (data) => {
      getContact(data.existsWhatsapp)
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        setErrorMessage(error.message || 'Произошла ошибка при проверке Whatsapp')
      } else {
        setErrorMessage('Неизвестная ошибка при проверке Whatsapp')
      }
    },
  })

  const getContactInfo = useMutation(getContactInfoMutation, {
    onSuccess: (data) => {
      const newChat: ChatInfo = {
        chatId: data.chatId,
        contactName: data.contactName,
        avatar: data.avatar,
        phone: convertToRussianPhoneNumber(contactNumber),
        isActive: true,
        dialogArr: [],
      }
      dispatch(updateChatsArr(newChat))
      setContactNumber('')
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        setErrorMessage(error.message || 'Произошла ошибка при получении информации о контакте')
      } else {
        setErrorMessage('Неизвестная ошибка при получении информации о контакте')
      }
    },
  })

  const getContact = (isExistsWhatsapp: boolean) => {
    if (!isExistsWhatsapp) {
      dispatch(getAttentionMessage(`Проверьте номер!\n Пользователя с номером ${contactNumber} не существует!`))
      dispatch(updateIsAttention())
      return
    }
    if (chatIdsArr.includes(getChatId(contactNumber))) {
      dispatch(getAttentionMessage('Чат с этим пользователем уже создан!'))
      dispatch(updateIsAttention())
      return
    }
    getContactInfo.mutate({ chatId: getChatId(contactNumber) })
  }

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (!contactNumber) return
    checkWhatsapp.mutate({ phoneNumber: Number(contactNumber) })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClick(event)
    }
    if (!isDigit(event.keyCode)) {
      event.preventDefault()
    }
  }

  return (
    <SearchWrapper>
      <Label>Поиск контакта</Label>
      <InputField
        value={contactNumber}
        onChange={(e) => updateContactNumber(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Введите номер телефона..."
      />
      <SearchButton onClick={handleClick}>
        <FaSearch />
      </SearchButton>
    </SearchWrapper>
  )
}
export default SearchInput
