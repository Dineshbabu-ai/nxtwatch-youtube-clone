import './index.css'

import {Link} from 'react-router-dom'
import {
  LinkVideoItem,
  VideoItemContainer,
  ThumbnailStyling,
  ProfileContainer,
  ProfileImage,
  ProfileAllTextContainer,
  ProfileTitle,
  ProfileText,
  ProfileTextContainer,
  ProfileTextMinCon,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const TrendingVideoItem = props => {
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
          <LinkVideoItem to={`/videos/${id}`}>
            <VideoItemContainer>
              <ThumbnailStyling src={thumbnailUrl} alt="video thumbnail" />
              <ProfileContainer>
                <ProfileImage src={profileImageUrl} alt={name} />
                <ProfileAllTextContainer>
                  <ProfileTitle themeChange={changeTheme}>{title}</ProfileTitle>
                  <ProfileTextContainer themeChange={changeTheme}>
                    <ProfileText>{name}</ProfileText>
                    <ProfileText>.</ProfileText>
                    <ProfileTextMinCon>
                      <ProfileText>{viewCount} views</ProfileText>
                      <ProfileText>.</ProfileText>
                      <ProfileText>{years} years ago</ProfileText>
                    </ProfileTextMinCon>
                  </ProfileTextContainer>
                </ProfileAllTextContainer>
              </ProfileContainer>
            </VideoItemContainer>
          </LinkVideoItem>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default TrendingVideoItem
