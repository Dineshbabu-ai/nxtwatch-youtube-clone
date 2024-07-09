import './index.css'

import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import Header from '../Header'
import TrendingVideoItem from '../TrendingVideoItem'
import NavbarDashboard from '../NavbarDashboard'
import {
  TrendingNavbarContainer,
  UnorderedListType,
  NavbarDisplay,
  VideosRightContainer,
  LoaderContainer,
  TrendingHeader,
  TrendingIconContainer,
  TrendingIconRoute,
  TrendingHeading,
  ImageFailure,
  TrendingFailureHeading,
  TrendingFailureDescription,
  RetryBtn,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProcess: 'INPROCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  updateFetchedData = videoList => {
    const videoUpdateList = videoList.map(eachItem => ({
      channel: {
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      },
      id: eachItem.id,
      publishedAt: eachItem.published_at,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
    }))

    return videoUpdateList
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProcess})

    const JwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updateVideoList = this.updateFetchedData(data.videos)
      this.setState({
        videosList: updateVideoList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleTrendingVideosList = () => {
    const {videosList} = this.state
    return (
      <UnorderedListType>
        {videosList.map(eachItem => (
          <TrendingVideoItem key={eachItem.id} videoItems={eachItem} />
        ))}
      </UnorderedListType>
    )
  }

  handleLoading = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  handleFailureView = () => {
    console.log('=>')
    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          return (
            <LoaderContainer>
              <ImageFailure
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
              <TrendingFailureHeading themeChange={changeTheme}>
                Oops! Something Went Wrong
              </TrendingFailureHeading>
              <TrendingFailureDescription themeChange={changeTheme}>
                We are having some trouble to complete your request. <br />
                Please try again
              </TrendingFailureDescription>
              <RetryBtn type="button" onClick={this.getTrendingVideos}>
                Retry
              </RetryBtn>
            </LoaderContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  handleApiStatusConstants = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.handleTrendingVideosList()
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
              <TrendingNavbarContainer>
                <NavbarDisplay>
                  <NavbarDashboard />
                </NavbarDisplay>

                <VideosRightContainer themeChange={changeTheme}>
                  <TrendingHeader themeChange={changeTheme}>
                    <TrendingIconContainer themeChange={changeTheme}>
                      <TrendingIconRoute themeChange={changeTheme} />
                    </TrendingIconContainer>

                    <TrendingHeading themeChange={changeTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeader>
                  {this.handleApiStatusConstants()}
                </VideosRightContainer>
              </TrendingNavbarContainer>
            </div>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Trending
