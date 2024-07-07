import './index.css'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  ThumbnailImage,
  TitleText,
  ChannelText,
  ListItemContainer,
  TextContainer,
  LinkContainerStyle,
  ViewsYearsContainer,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const SavedVideoItems = props => {
  const {videoDetails} = props
  const {
    channel,
    description,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    videoUrl,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl, subscriberCount} = channel
  const publishedDate = new Date(publishedAt)
  const currentDate = new Date()
  const years = currentDate.getFullYear() - publishedDate.getFullYear()
  return (
    <SavedContext.Consumer>
      {value => {
        const {changeTheme} = value
        return (
          <LinkContainerStyle to={`/videos/${id}`}>
            <ListItemContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <TextContainer>
                <TitleText themeChange={changeTheme}>{title}</TitleText>
                <ChannelText>{name}</ChannelText>
                <ViewsYearsContainer>
                  <p>{viewCount} views</p>
                  <p className="dot-video">.</p>
                  <p>{years} years ago</p>
                </ViewsYearsContainer>
              </TextContainer>
            </ListItemContainer>
          </LinkContainerStyle>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default SavedVideoItems
