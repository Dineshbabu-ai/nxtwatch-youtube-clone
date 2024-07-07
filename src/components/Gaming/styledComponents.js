import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const GamingNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    .navbar-display {
      display: block;
      width: 200px;
      height: 100vh;
    }
  }
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    list-style-type: none;
    padding: 20px;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
`

export const NavbarDisplay = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 200px;
    height: 100vh;
  }
`

export const VideosRightContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${props => (props.themeChange ? 'black' : 'white')};

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const GamingHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.themeChange ? '#0f0f0f' : '#ebebeb')};
`

export const GamingIconContainer = styled.div`
  background-color: ${props => (props.themeChange ? 'black' : '#f1f5f9')};
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    height: 70px;
    width: 70px;
    border-radius: 35px;
  }
`

export const GamingIconRoute = styled(SiYoutubegaming)`
  color: red;
  width: 30px;
  height: 30px;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
`

export const FailureViewImage = styled.img`
  width: 100%;
  max-width: 300px;
`

export const RetryFailureButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
export const GamingHeading = styled.h1`
  color: ${props => (props.themeChange ? '#f1f1f1' : 'black')};
`
export const SomeWenWrongHeading = styled.h2`
  color: ${props => (props.themeChange ? 'white' : 'black')};
`

export const SomeWentWrongdescription = styled.p`
  color: ${props => (props.themeChange ? 'white' : 'black')};
  text-align: center;
`
