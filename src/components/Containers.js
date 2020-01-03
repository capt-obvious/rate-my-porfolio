import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2em;
  display: grid;
  grid-gap: 1em;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 0.5fr));
`

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AbsoluteCenterContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
