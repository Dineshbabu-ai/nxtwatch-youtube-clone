import './index.css'
import {FaFire} from 'react-icons/fa'

import Header from '../Header'
import SavedVideoItems from '../SavedVideoItems'
import SavedContext from '../../context/SavedContext'
import NavbarDashboard from '../NavbarDashboard'
import {
  NosavedVideos,
  NosavedVideosTitle,
  NosavedVideosDescription,
  SavedVideosContainer,
  SavedVideosHeade,
  SavedVideosHeading,
  SavedVideoIconContainer,
} from './styledComponents'

const SavedVideos = () => {
  const NoSavedVideos = () => {
    console.log('=>')
    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          return (
            <NosavedVideos themeChange={changeTheme}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
                className="nosaved-image"
              />
              <NosavedVideosTitle themeChange={changeTheme}>
                No saved videos found
              </NosavedVideosTitle>
              <NosavedVideosDescription
                themeChange={changeTheme}
                className="nosaved-videos-text"
              >
                You can save your videos while watching them
              </NosavedVideosDescription>
            </NosavedVideos>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  return (
    <SavedContext.Consumer>
      {value => {
        const {savedList, changeTheme} = value
        const showEmptyView = savedList.length === 0

        const savedVideosList = () => (
          <ul className="saved-unorderlist">
            {savedList.map(eachItem => (
              <SavedVideoItems key={eachItem.id} videoDetails={eachItem} />
            ))}
          </ul>
        )

        return (
          <div>
            <Header />
            <div className="saved-navbar-container">
              <div className="navbar-display">
                <NavbarDashboard />
              </div>
              {showEmptyView ? (
                <NoSavedVideos />
              ) : (
                <SavedVideosContainer
                  themeChange={changeTheme}
                  className="videos-right-container"
                >
                  <SavedVideosHeade
                    themeChange={changeTheme}
                    className="trending-header"
                  >
                    <SavedVideoIconContainer
                      themeChange={changeTheme}
                      className="trending-icon-container"
                    >
                      <FaFire className="trending-icon-route" />
                    </SavedVideoIconContainer>
                    <SavedVideosHeading themeChange={changeTheme}>
                      Saved Videos
                    </SavedVideosHeading>
                  </SavedVideosHeade>
                  {savedVideosList()}
                </SavedVideosContainer>
              )}
            </div>
          </div>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default SavedVideos
