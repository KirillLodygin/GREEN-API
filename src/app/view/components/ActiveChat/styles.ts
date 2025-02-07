import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const TopSection = styled.div`
  flex-shrink: 0;
`

export const MiddleSection = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`

export const BottomSection = styled.div`
  flex-shrink: 0;
`
