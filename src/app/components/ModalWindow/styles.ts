import styled, { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  min-width: 300px;
  animation: ${fadeIn} 200ms ease-in-out;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 90vh;
`

export const CloseButtonTopWrapper = styled.div`
  background-color: #4d805c;
  width: 100%;
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
`

export const CloseButtonTop = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  padding: 0 10px;
  &:hover {
    color: #ccc;
  }
`

export const CloseButtonBottom = styled.button`
  margin: 20px;
  padding: 8px 12px;
  background-color: #4d805c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #436b53;
  }
`

export const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 16px;
  color: #555;
`
