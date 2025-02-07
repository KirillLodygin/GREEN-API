import styled from 'styled-components'

interface Props {
  isread: string
}

export const SentMessageMessageWrapper = styled.div<Props>`
  background-color: ${(props) => (props.isread === 'true' ? '#E6FFED' : '#fff')};
  padding: 20px 25px;
  border-radius: 12px;
  margin-bottom: 16px;
  position: relative;
  max-width: 90%;
  word-wrap: break-word;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 3px;
    right: -9px;
    border-top: 18px solid transparent;
    border-bottom: 18px solid transparent;
    border-left: 14px solid ${(props) => (props.isread === 'true' ? '#E6FFED' : '#fff')};
    z-index: 1;
  }
`

export const CheckIcon = styled.span<Props>`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${(props) => (props.isread === 'true' ? '#4D805C' : 'gray')};
`
