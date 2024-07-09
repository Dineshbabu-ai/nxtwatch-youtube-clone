import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'
import Popup from 'reactjs-popup'

export const TrendingNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const UnorderedListType = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;

  @media screen and (max-width: 575.98px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
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
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`

export const TrendingHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.themeChange ? '#0f0f0f' : '#ebebeb')};

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const TrendingIconContainer = styled.div`
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
export const ImageFailure = styled.img`
  width: 300px;
  height: 300px;
`

export const TrendingIconRoute = styled(FaFire)`
  color: red;
  width: 30px;
  height: 30px;
`
export const TrendingHeading = styled.h1`
  color: ${props => (props.themeChange ? '#f1f1f1' : 'black')};
`
export const TrendingFailureHeading = styled.h2`
  color: ${props => (props.themeChange ? 'white' : 'black')};
`
export const TrendingFailureDescription = styled.p`
  color: ${props => (props.themeChange ? 'white' : 'black')};
  text-align: center;
`
export const RetryBtn = styled.button`
  color: white;
  background-color: #4f46e5;
  height: 50px;
  width: 100px;
  border-radius: 8px;
  border-width: 0px;
`
