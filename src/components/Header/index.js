import React from 'react'
import './index.css'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon, FaFire} from 'react-icons/fa'
import {IoMdMenu} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {IoSunnyOutline} from 'react-icons/io5'
import {MdHome, MdSave} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SavedContext from '../../context/SavedContext'
import Menu from '../Menu'

import {
  HeaderContainer,
  NxtWatchLogo,
  IconContainer,
  MoonBtn,
  MenuBtn,
  ProfileBtn,
  LogoutIconBtn,
  LogoutBtn,
  ProfileImg,
  PopupContent,
  PopupButton,
  MenuIcon,
  LogoutIcon,
} from './styledComponents'

const dashBoardConstants = [
  {
    optionId: 'HOME',
    label: 'Home',
    Icon: MdHome,
    route: '/',
  },
  {
    optionId: 'TRENDING',
    label: 'Trending',
    Icon: FaFire,
    route: '/trending',
  },
  {
    optionId: 'GAMING',
    label: 'Gaming',
    Icon: SiYoutubegaming,
    route: '/gaming',
  },
  {
    optionId: 'SAVED_VIDEOS',
    label: 'Saved videos',
    Icon: MdSave,
    route: '/saved-videos',
  },
]

class Header extends React.Component {
  state = {menuClick: false}

  handleLogoutIcon = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  handleMenuItem = () => {
    this.setState(prevState => ({menuClick: !prevState.menuClick}))
  }

  render() {
    const {menuClick} = this.state
    return (
      <SavedContext.Consumer>
        {value => {
          const {toggleTheme, changeTheme} = value

          const handleThemeChange = () => {
            toggleTheme()
          }
          const logoUrl = changeTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <HeaderContainer themeValue={changeTheme}>
              <Link to="/">
                <NxtWatchLogo
                  src={logoUrl}
                  alt="website logo"
                  className="nxtWatch-logo"
                />
              </Link>
              <div>
                <IconContainer className="icon-container">
                  <li>
                    <MoonBtn
                      type="button"
                      className="moon-btn"
                      onClick={handleThemeChange}
                      data-testid="theme"
                    >
                      {changeTheme ? (
                        <IoSunnyOutline className="sunny-icon" />
                      ) : (
                        <FaMoon className="moon-icon" />
                      )}
                    </MoonBtn>
                  </li>
                  <li>
                    <MenuBtn
                      type="button"
                      className="menu-btn"
                      onClick={this.handleMenuItem}
                    >
                      <MenuIcon themeChange={changeTheme} />
                    </MenuBtn>

                    <ProfileBtn type="button" className="profile-btn">
                      <ProfileImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                        className="profile-img"
                      />
                    </ProfileBtn>
                  </li>

                  <li>
                    <Popup
                      trigger={
                        <LogoutIconBtn
                          type="button"
                          className="logout-icon-btn"
                        >
                          <LogoutIcon themeChange={changeTheme} />
                        </LogoutIconBtn>
                      }
                      modal
                      nested
                    >
                      {close => (
                        <PopupContent>
                          <p>Are you sure you want to logout?</p>
                          <PopupButton type="button" onClick={close}>
                            Cancel
                          </PopupButton>
                          <PopupButton
                            type="button"
                            onClick={() => {
                              this.handleLogoutIcon()
                              close()
                            }}
                          >
                            Confirm
                          </PopupButton>
                        </PopupContent>
                      )}
                    </Popup>
                    <Popup
                      trigger={
                        <LogoutBtn
                          themeChange={changeTheme}
                          type="button"
                          className="logout-btn"
                        >
                          Logout
                        </LogoutBtn>
                      }
                      modal
                      nested
                    >
                      {close => (
                        <PopupContent>
                          <p>Are you sure you want to logout?</p>
                          <PopupButton type="button" onClick={close}>
                            Cancel
                          </PopupButton>
                          <PopupButton
                            type="button"
                            onClick={() => {
                              this.handleLogoutIcon()
                              close()
                            }}
                          >
                            Confirm
                          </PopupButton>
                        </PopupContent>
                      )}
                    </Popup>
                  </li>
                </IconContainer>
                {menuClick && (
                  <ul className="menu-unlist-container">
                    {dashBoardConstants.map(eachItem => (
                      <Menu key={eachItem.optionId} menuDetails={eachItem} />
                    ))}
                  </ul>
                )}
              </div>
            </HeaderContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default withRouter(Header)
