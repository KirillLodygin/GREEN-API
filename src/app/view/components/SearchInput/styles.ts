import styled from 'styled-components'

export const SearchWrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 0 16px;
`

export const Label = styled.label`
  position: absolute;
  top: -35px;
  left: 12px;
  font-size: 16px;
  color: whitesmoke;
  margin-bottom: 15px;
  padding: 0 5px;
  z-index: 1;
`

export const InputField = styled.input`
  width: 75%;
  padding: 10px 40px 10px 45px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  margin-right: 10px;

  &:focus + button {
    color: #4d805c;
  }
`

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;

  svg {
    font-size: 18px;
  }
`
