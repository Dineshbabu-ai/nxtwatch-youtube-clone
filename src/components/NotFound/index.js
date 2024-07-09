import './index.css'
import Header from '../Header'
import NavbarDashboard from '../NavbarDashboard'
import {
  NotFoundContainer,
  NotFoundImage,
  HeadingNotFound,
  ParagraphNotFound,
  HomeNavbarContainer,
  NavbarDisplay,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const NotFound = () => {
  console.log('=>')
  return (
    <SavedContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <div>
            <Header />
            <HomeNavbarContainer themeChange={changeTheme}>
              <NavbarDisplay>
                <NavbarDashboard />
              </NavbarDisplay>
              <NotFoundContainer themeChange={changeTheme}>
                {changeTheme ? (
                  <NotFoundImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                    alt="not found"
                  />
                ) : (
                  <NotFoundImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                    alt="not found"
                  />
                )}

                <HeadingNotFound themeChange={changeTheme}>
                  Page Not Found
                </HeadingNotFound>
                <ParagraphNotFound themeChange={changeTheme}>
                  we are sorry, the page you requested could not be found.
                </ParagraphNotFound>
              </NotFoundContainer>
            </HomeNavbarContainer>
          </div>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default NotFound
