import styled from 'styled-components'

export const NosavedVideos = styled.div`
  background-color: ${props => (props.themeChange ? 'black' : '#f1f1f1')};
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const NosavedVideosTitle = styled.h2`
  color: ${props => (props.themeChange ? 'white' : 'black')};
`

export const NosavedVideosDescription = styled.p`
  color: ${props => (props.themeChange ? '#f1f5f9' : '#424242')};
`

export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.themeChange ? 'black' : 'white')};
  height: 100vh;
`
export const SavedVideosHeade = styled.div`
  background-color: ${props => (props.themeChange ? '#0f0f0f' : '#ebebeb')};
`
export const SavedVideosHeading = styled.h2`
  color: ${props => (props.themeChange ? 'white' : 'black')};
`

export const SavedVideoIconContainer = styled.div`
  background-color: ${props => (props.themeChange ? 'black' : '#ebebeb')};
`
