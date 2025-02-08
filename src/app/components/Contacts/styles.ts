import styled from 'styled-components'

export const StyledContacts = styled.div`
  width: 100%;
  height: 100%;
  background-color: #666;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Header = styled.h2`
  color: white;
  margin-bottom: 60px;
  font-size: 25px;
  padding: 16px 16px;
`

export const ContactList = styled.div`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin-top: 30px;
  max-height: 80vh;
  overflow-y: auto;
`
