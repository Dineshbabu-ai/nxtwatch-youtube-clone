import './index.css'
import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {MdHome, MdSave} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {
  NavbarDashboardContainer,
  NavbarLink,
  NavbarItem,
  IconContainer,
  NavbarIcon,
  NavbarButton,
  ContactUs,
  NavDashboardCon,
  TitleText,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

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

const NavbarDashboard = () => {
  const location = useLocation()
  const [selectedOption, setSelectedOption] = useState(location.pathname)

  useEffect(() => {
    setSelectedOption(location.pathname)
  }, [location.pathname])

  return (
    <SavedContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <NavDashboardCon
            themeChange={changeTheme}
            className="dashboard-main-container"
          >
            <NavbarDashboardContainer>
              {dashBoardConstants.map(eachItem => (
                <NavbarLink key={eachItem.optionId} to={eachItem.route}>
                  <NavbarItem
                    themeChange={changeTheme}
                    className={
                      eachItem.route === selectedOption
                        ? 'select-option-styling'
                        : ''
                    }
                    onClick={() => setSelectedOption(eachItem.route)}
                  >
                    <IconContainer>
                      <NavbarIcon
                        themeChange={changeTheme}
                        as={eachItem.Icon}
                        selected={eachItem.route === selectedOption}
                      />
                      <NavbarButton type="button">
                        <TitleText themeChange={changeTheme}>
                          {eachItem.label}
                        </TitleText>
                      </NavbarButton>
                    </IconContainer>
                  </NavbarItem>
                </NavbarLink>
              ))}
            </NavbarDashboardContainer>
            <div className="contact-us-container">
              <ContactUs themeChange={changeTheme}>CONTACT US</ContactUs>
              <div className="social-media-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="social-media-img"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="social-media-img"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                  className="social-media-img"
                />
              </div>
              <ContactUs themeChange={changeTheme}>
                Enjoy! Now to see your channels and recommendations!
              </ContactUs>
            </div>
          </NavDashboardCon>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default NavbarDashboard
