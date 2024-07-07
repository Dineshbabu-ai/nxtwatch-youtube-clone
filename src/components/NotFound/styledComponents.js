import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.themeChange ? 'black' : '#f1f5f9')};
  height: 100vh;
  width: 100%;
`

export const NotFoundImage = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 500px;
    width: 50%;
  }
`

export const HeadingNotFound = styled.h1`
  text-align: center;
  font-size: 25px;
  font-family: 'roboto';
  color: ${props => (props.themeChange ? '#f1f5f9' : 'black')};

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`

export const ParagraphNotFound = styled.p`
  text-align: center;
  font-weight: 500;
  color: ${props => (props.themeChange ? '#616e7c' : '#212121')};
  font-family: 'Roboto';
  padding: 0;
  margin: 0;
`

export const HomeNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.themeChange ? 'black' : 'white')};
`

export const NavbarDisplay = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`
