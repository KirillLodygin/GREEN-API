import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #4d805c;
  }
`

export const Button = styled.button`
  padding: 10px;
  background-color: #4d805c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #365a46; /* Темнее оттенок серо-зелёного */
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`
