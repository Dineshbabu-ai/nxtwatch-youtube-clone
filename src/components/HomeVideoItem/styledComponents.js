import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ThumbnailStyling = styled.img`
  width: 100%;
`

export const LinkHomeVideo = styled(Link)`
  text-decoration: none;
`

export const VideoItemContainer = styled.li`
  cursor: pointer;
  width: 100%;

  @media screen and (max-width: 575.98x) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    max-width: 280px;
    margin: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    max-width: 280px;
    margin: 12px;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    max-width: 280px;
    margin: 12px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 280px;
    margin: 12px;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

  @media screen and (max-width: 575.98x) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    min-width: 100%;
  }
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (max-width: 575.98x) {
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    width: 45px;
    height: 45px;
  }

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
  }
`

export const ProfileTitle = styled.p`
  color: ${props => (props.themeChange ? 'white' : '#212121')};
  font-weight: 500;
  font-family: 'Roboto';
  padding: 0;
  margin: 0;

  @media screen and (max-width: 575.98x) {
    font-size: 22px;
  }

  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    font-size: 14px;
  }
  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`

export const ProfileText = styled.p`
  color: ${props => (props.themeChange ? '#ebebeb' : '#909090')};
  font-weight: 500;
  font-family: 'Roboto';
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const ProfileAllTextContainer = styled.div`
  @media screen and (max-width: 575.98x) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
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

  @media screen and (max-width: 575.98x) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
