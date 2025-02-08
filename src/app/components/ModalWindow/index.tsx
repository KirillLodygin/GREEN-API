import React from 'react'
import { useAppDispatch } from '../../hooks'
import { getAttentionMessage, getErrorMessage, updateIsAttention } from '../../store/reducers/chats'
import { Backdrop, Wrapper, CloseButtonTop, StyledParagraph, CloseButtonBottom, CloseButtonTopWrapper } from './styles'

interface Props {
  isOpen: boolean
  text: string
}

export const ModalWindow: React.FC<Props> = ({ isOpen, text }) => {
  const dispatch = useAppDispatch()
  if (!isOpen) return null

  const onClose = () => {
    dispatch(getAttentionMessage(''))
    dispatch(getErrorMessage(''))
    dispatch(updateIsAttention())
  }

  return (
    <Backdrop>
      <Wrapper>
        <CloseButtonTopWrapper>
          <CloseButtonTop onClick={onClose}>×</CloseButtonTop>
        </CloseButtonTopWrapper>
        <StyledParagraph>{text}</StyledParagraph>
        <CloseButtonBottom onClick={onClose}>Закрыть</CloseButtonBottom>
      </Wrapper>
    </Backdrop>
  )
}
