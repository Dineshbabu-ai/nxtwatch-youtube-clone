import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {IoMdMenu} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: ${props => (props.themeValue ? '#231f20' : '#ffffff')};
`

export const NxtWatchLogo = styled.img`
  height: 35px;
  width: 100px;
`

export const IconContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 170px;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`

export const MoonBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const LogoutIconBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const LogoutBtn = styled.button`
  background-color: white;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  width: 70px;
  height: 30px;
  display: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: block;
    height: 35px;
  }
`

export const MoonIcon = styled(({changeTheme, ...rest}) =>
  changeTheme ? (
    <IoSunnyOutline style={{color: 'white'}} />
  ) : (
    <FaMoon style={{color: 'black'}} />
  ),
)`
  width: 30px;
  height: 30px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const PopupOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
  }
`

export const PopupHeader = styled.h2`
  margin-bottom: 10px;
  color: #333;
`

export const PopupText = styled.p`
  margin-bottom: 20px;
  color: #666;
`

export const MenuIcon = styled(IoMdMenu)`
  width: 30px;
  height: 30px;
  color: ${props => (props.themeChange ? 'white' : 'black')};
`
export const LogoutIcon = styled(FiLogOut)`
  width: 30px;
  height: 30px;
  color: ${props => (props.themeChange ? 'white' : 'black')};
`
