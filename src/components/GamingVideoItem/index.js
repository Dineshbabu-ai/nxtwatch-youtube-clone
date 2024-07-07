import './index.css'
import {Link} from 'react-router-dom'
import {
  LinkContainer,
  GamingVideoContainer,
  GamingThumbnail,
  GamingTitle,
  GamingViewsCount,
  GamingWorldwideText,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const GamingVideoItem = ({videoItems}) => {
  const {id, thumbnailUrl, title, viewCount} = videoItems
  return (
    <SavedContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <LinkContainer to={`/videos/${id}`}>
            <GamingVideoContainer className="gaming-video-contianer">
              <GamingThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
                className="gaming-thumbnail"
              />
              <GamingTitle themeChange={changeTheme} className="gaming-title">
                {title}
              </GamingTitle>
              <GamingViewsCount
                themeChange={changeTheme}
                className="gaming-views-count"
              >
                {viewCount} Watching
              </GamingViewsCount>
              <GamingWorldwideText
                themeChange={changeTheme}
                className="gaming-worldwide-text"
              >
                Worldwide
              </GamingWorldwideText>
            </GamingVideoContainer>
          </LinkContainer>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default GamingVideoItem
