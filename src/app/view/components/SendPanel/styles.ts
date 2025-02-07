import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #333;
  padding: 10px;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
`

export const InputField = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  line-height: 24px;
  padding: 0 10px;
  color: whitesmoke;
`

export const SendButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #4d805c;
  color: #333;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: bold;
`
