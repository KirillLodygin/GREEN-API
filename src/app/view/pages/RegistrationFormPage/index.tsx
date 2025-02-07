import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { getSettingsMutation } from '../../../mutations/appMutations'
import { FormContainer, Form, Label, Input, Button, ErrorMessage } from './styles'

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate()
  const [idInstance, setIdInstance] = useState('')
  const [apiTokenInstance, setApiTokenInstance] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getSettings = useMutation(getSettingsMutation, {
    onSuccess: () => {
      Cookies.set('idInstance', idInstance)
      Cookies.set('apiTokenInstance', apiTokenInstance)
      setErrorMessage('')
      navigate('/chat')
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        setErrorMessage(error.message || 'Произошла ошибка при попытке соединения')
      } else {
        setErrorMessage('Неизвестная ошибка')
      }
    },
  })

  useEffect(() => {
    const savedIdInstance = Cookies.get('idInstance')
    const savedApiTokenInstance = Cookies.get('apiTokenInstance')

    if (savedIdInstance && savedApiTokenInstance) {
      navigate('/chat')
    }
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getSettings.mutate({ id: idInstance, token: apiTokenInstance })
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="idInstance">ID Instance:</Label>
        <Input
          type="text"
          id="idInstance"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          required
        />

        <br />

        <Label htmlFor="apiTokenInstance">API Token Instance:</Label>
        <Input
          type="password"
          id="apiTokenInstance"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
          required
        />

        <br />

        <Button type="submit" disabled={getSettings.isLoading}>
          Отправить
        </Button>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Form>
    </FormContainer>
  )
}

export default RegistrationForm
