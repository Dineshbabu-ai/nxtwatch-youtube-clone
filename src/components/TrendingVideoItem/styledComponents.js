import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkVideoItem = styled(Link)`
  text-decoration: none;
`

export const VideoItemContainer = styled.li`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    max-width: 300px;
    margin: 15px;
  }
`

export const ThumbnailStyling = styled.img`
  width: 100%;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

  @media screen and (min-width: 768px) {
    min-width: 100%;
  }
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`
export const ProfileAllTextContainer = styled.div`
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`
export const ProfileTitle = styled.p`
  color: ${props => (props.themeChange ? 'white' : '#212121')};

  font-weight: 500;
  font-family: 'Roboto';
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const ProfileText = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${props => (props.themeChange ? '#d7dfe9' : '#909090')};

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
