import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import GamingVideoItem from '../GamingVideoItem'
import Header from '../Header'
import NavbarDashboard from '../NavbarDashboard'
import {
  Container,
  GamingNavbarContainer,
  UnorderedList,
  NavbarDisplay,
  VideosRightContainer,
  LoaderContainer,
  GamingHeader,
  GamingIconContainer,
  GamingIconRoute,
  FailureViewContainer,
  FailureViewImage,
  RetryFailureButton,
  GamingHeading,
  SomeWenWrongHeading,
  SomeWentWrongdescription,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProcess: 'INPROCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  updateFetchedData = videoList => {
    const videoUpdateList = videoList.map(eachItem => ({
      id: eachItem.id,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,
    }))

    return videoUpdateList
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProcess})

    const JwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, options)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      const updateVideoList = this.updateFetchedData(data.videos)
      this.setState({
        videosList: updateVideoList,
        apiStatus: apiStatusConstants.success,
      })
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleGamingVideosList = () => {
    const {videosList} = this.state
    return (
      <UnorderedList>
        {videosList.map(eachItem => (
          <GamingVideoItem key={eachItem.id} videoItems={eachItem} />
        ))}
      </UnorderedList>
    )
  }

  handleLoading = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  handleFailureView = () => {
    console.log('dine')
    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          return (
            <FailureViewContainer>
              <FailureViewImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
              <SomeWenWrongHeading themeChange={changeTheme}>
                Oops! Something Went Wrong
              </SomeWenWrongHeading>
              <SomeWentWrongdescription themeChange={changeTheme}>
                We are having some trouble to complete your request. Please try
                again.
              </SomeWentWrongdescription>
              <RetryFailureButton onClick={this.getGamingVideos}>
                Retry
              </RetryFailureButton>
            </FailureViewContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  handleApiStatusConstants = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.handleGamingVideosList()
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
            <Container>
              <Header />
              <GamingNavbarContainer>
                <NavbarDisplay>
                  <NavbarDashboard />
                </NavbarDisplay>
                <VideosRightContainer themeChange={changeTheme}>
                  <GamingHeader themeChange={changeTheme}>
                    <GamingIconContainer themeChange={changeTheme}>
                      <SiYoutubegaming
                        className="gaming-icon"
                        style={{color: 'red', height: '30px', width: '30px'}}
                      />
                    </GamingIconContainer>
                    <GamingHeading themeChange={changeTheme}>
                      Gaming
                    </GamingHeading>
                  </GamingHeader>
                  {this.handleApiStatusConstants()}
                </VideosRightContainer>
              </GamingNavbarContainer>
            </Container>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Gaming
