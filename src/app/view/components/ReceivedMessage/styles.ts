import styled from 'styled-components'

export const ReceivedMessageWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  position: relative;
  max-width: 60%;
  word-wrap: break-word;
  align-self: flex-start;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: -9px;
    border-top: 14px solid transparent;
    border-bottom: 14px solid transparent;
    border-right: 14px solid #f7f7f7;
    z-index: 1;
  }
`
