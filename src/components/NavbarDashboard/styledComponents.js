import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarDashboardContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover,
  &.select-option-styling {
    background-color: ${props => (props.themeChange ? '#383838' : '#e2e8f0')};
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NavbarIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  color: ${props => (props.selected ? 'red' : '#606060')};
`

export const NavbarButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: inherit;
`
export const ContactUs = styled.p`
  color: ${props => (props.themeChange ? 'white' : 'black')};
  font-weight: 500;
  text-align: center;
`
export const NavDashboardCon = styled.div`
  background-color: ${props => (props.themeChange ? '#231f20' : 'white')};
`
export const TitleText = styled.p`
  color: ${props => (props.themeChange ? '#ebebeb' : 'black')};
`
