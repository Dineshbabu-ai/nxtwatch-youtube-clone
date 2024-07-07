import './index.css'
import {Component} from 'react'

import ReactPlayer from 'react-player'
import {MdSave} from 'react-icons/md'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import SavedContext from '../../context/SavedContext'
import Header from '../Header'
import NavbarDashboard from '../NavbarDashboard'
import {
  PremiumVideosRightContainer,
  TitleVideoDetail,
  TitleSubSub,
  DescriptionSub,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProcess: 'INPROCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLike: false,
    isDislike: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  handleLikeBtn = () => {
    this.setState({isLike: true, isDislike: false})
  }

  handleDislike = () => {
    this.setState({isDislike: true, isLike: false})
  }

  updateFetchedData = video => ({
    channel: {
      name: video.channel.name,
      profileImageUrl: video.channel.profile_image_url,
      subscriberCount: video.channel.subscriber_count,
    },
    id: video.id,
    publishedAt: video.published_at,
    thumbnailUrl: video.thumbnail_url,
    title: video.title,
    viewCount: video.view_count,
    videoUrl: video.video_url,
    description: video.description,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProcess})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const JwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updateVideoDetails = this.updateFetchedData(data.video_details)
      this.setState({
        videoDetails: updateVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleVideoDetailsView = () => {
    const {videoDetails, isSaved} = this.state

    const {
      channel,
      title,
      viewCount,
      publishedAt,
      description,
      videoUrl,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const publishedDate = new Date(publishedAt)
    const currentDate = new Date()
    const years = currentDate.getFullYear() - publishedDate.getFullYear()
    const {isLike, isDislike} = this.state
    const likes = isLike ? 'like-btn-icon-like' : 'like-btn-icon'

    const dislikes = isDislike ? 'dislike-btn-icon-dislike' : 'dislike-btn-icon'

    return (
      <SavedContext.Consumer>
        {value => {
          const {saveVideoItem, isSavedBtn, savedList, changeTheme} = value

          const saved = isSaved ? 'save-btn-icon-saved' : 'save-btn-icon'

          const handleSaveVideoItem = () => {
            saveVideoItem(videoDetails)
          }
          return (
            <div className="video-details-container">
              <ReactPlayer url={videoUrl} playing controls width="100%" />
              <div className="titles-text-container">
                <TitleVideoDetail
                  themeChange={changeTheme}
                  className="title-video-details"
                >
                  {title}
                </TitleVideoDetail>
                <div className="years-views-like-container">
                  <div className="views-years-container">
                    <p>{viewCount} views</p>
                    <p className="dot-video">.</p>
                    <p>{years} years ago</p>
                  </div>

                  <ul className="unorder-list-video">
                    <li className="like-btn-icon-container">
                      <button
                        type="button"
                        className="button-like-dislike"
                        onClick={this.handleLikeBtn}
                      >
                        .
                        <BiLike className={likes} />
                      </button>
                      <p>Like</p>
                    </li>
                    <li className="like-btn-icon-container">
                      <button
                        type="button"
                        className="button-like-dislike"
                        onClick={this.handleDislike}
                      >
                        .
                        <BiDislike className={dislikes} />
                      </button>
                      <p>Dislike</p>
                    </li>

                    <li className="like-btn-icon-container">
                      <button
                        type="button"
                        className="button-like-dislike"
                        onClick={handleSaveVideoItem}
                      >
                        .
                        <MdSave className={saved} />
                      </button>
                      <p>Save</p>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="horizontal-line" />
              <div className="profile-sub-container">
                <img
                  src={profileImageUrl}
                  alt={name}
                  className="profile-img-sub-styling"
                />
                <div className="profile-name-sub-container">
                  <TitleSubSub
                    themeChange={changeTheme}
                    className="profile-name-sub"
                  >
                    {name}
                  </TitleSubSub>
                  <p className="profile-subscriber">
                    {subscriberCount} subscribers
                  </p>
                </div>
              </div>
              <DescriptionSub
                themeChange={changeTheme}
                className="profile-description"
              >
                {description}
              </DescriptionSub>
            </div>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  handleLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  handleFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="failure-heading-wrong">Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button
        type="button"
        className="retry-failure-button"
        onClick={this.getVideoDetails}
      >
        Retry
      </button>
    </div>
  )

  handleApiStatusConstants = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.handleVideoDetailsView()
      case apiStatusConstants.failure:
        return this.handleFailureView()
      case apiStatusConstants.inProcess:
        return this.handleLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          return (
            <div>
              <Header />
              <div className="videoDetails-navbar-container">
                <div className="navbar-display">
                  <NavbarDashboard />
                </div>
                <PremiumVideosRightContainer
                  themeChange={changeTheme}
                  className="premium-videos-right-container"
                >
                  {this.handleApiStatusConstants()}
                </PremiumVideosRightContainer>
              </div>
            </div>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default VideoItemDetails
