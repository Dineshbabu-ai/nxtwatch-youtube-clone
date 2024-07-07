import './index.css'
import {Link} from 'react-router-dom'

import {
  ThumbnailStyling,
  LinkHomeVideo,
  VideoItemContainer,
  ProfileContainer,
  ProfileImage,
  ProfileTitle,
  ProfileText,
  ProfileAllTextContainer,
  ProfileTextContainer,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const HomeVideoItem = props => {
  const {videoItems} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = videoItems
  const {name, profileImageUrl} = channel

  const publishedDate = new Date(publishedAt)
  const currentDate = new Date()
  const years = currentDate.getFullYear() - publishedDate.getFullYear()

  return (
    <SavedContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <LinkHomeVideo to={`videos/${id}`} className="link-home-video">
            <VideoItemContainer className="video-item-container">
              <ThumbnailStyling
                src={thumbnailUrl}
                alt=""
                className="thumbnail-styling"
              />
              <ProfileContainer className="profile-container">
                <div>
                  <ProfileImage
                    src={profileImageUrl}
                    alt=""
                    className="profile-image"
                  />
                </div>
                <ProfileAllTextContainer className="profile-all-text-container">
                  <ProfileTitle themeChange={changeTheme}>{title}</ProfileTitle>
                  <ProfileTextContainer className="profile-text-container">
                    <ProfileText themeChange={changeTheme}>{name}</ProfileText>
                    <ProfileText themeChange={changeTheme}>.</ProfileText>
                    <ProfileText themeChange={changeTheme}>
                      {viewCount} views
                    </ProfileText>
                    <ProfileText themeChange={changeTheme}>.</ProfileText>
                    <ProfileText themeChange={changeTheme}>
                      {years} years ago
                    </ProfileText>
                  </ProfileTextContainer>
                </ProfileAllTextContainer>
              </ProfileContainer>
            </VideoItemContainer>
          </LinkHomeVideo>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default HomeVideoItem
