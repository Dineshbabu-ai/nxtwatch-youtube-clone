import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkVideoItem = styled(Link)`
  text-decoration: none;
`

export const VideoItemContainer = styled.li`
  cursor: pointer;
  @media screen and (max-width: 575.98px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px;
  }

  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px;
  }
`

export const ThumbnailStyling = styled.img`
  @media screen and (max-width: 575.98px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    min-width: 320px;
    max-width: 320px;
  }
  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    min-width: 300px;
    max-width: 300px;
  }

  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    min-width: 350px;
    max-width: 350px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 420px;
    max-width: 420px;
  }
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  @media screen and (max-width: 575.98px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;

  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    display: none;
  }
`
export const ProfileAllTextContainer = styled.div`
  margin-left: 10px;

  @media screen and (max-width: 575.98px) {
    max-width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    max-width: 100%;
  }

  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    max-width: 100%;
  }
  @media screen and (min-width: 1200px) {
    max-width: 100%;
  }
`
export const ProfileTitle = styled.p`
  color: ${props => (props.themeChange ? 'white' : '#212121')};

  font-weight: 500;
  font-family: 'Roboto';
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    font-size: 15px;
  }

  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`

export const ProfileText = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  padding: 0;
  margin: 0;

  @media screen and (max-width: 575.98px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    font-size: 15px;
  }

  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    font-size: 13px;
  }

  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 0;
  width: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${props => (props.themeChange ? '#d7dfe9' : '#909090')};

  @media screen and (max-width: 575.98px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 270px;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
  }

  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`
export const ProfileTextMinCon = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  max-width: 180px;
  min-width: 180px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    max-width: 170px;
    min-width: 170px;
  }

  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    max-width: 180px;
    min-width: 180px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 200px;
    min-width: 200px;
  }
`
