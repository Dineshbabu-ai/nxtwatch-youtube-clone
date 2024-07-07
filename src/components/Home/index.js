import './index.css'
import {Component} from 'react'
import {MdCancel} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import HomeVideoItem from '../HomeVideoItem'
import Header from '../Header'
import NavbarDashboard from '../NavbarDashboard'
import {
  HomeContainer,
  PremiumNxtWatchLogo,
  PremiumCancelIcon,
  PremiumCancelButton,
  PremiumCardContainer,
  PremiumContainer,
  PremiumButtonGetItNow,
  PremiumTextStyling,
  SearchContainer,
  SearchInput,
  SearchIconContainer,
  UnorderedListType,
  NavbarDisplay,
  PremiumVideosRightContainer,
  SearchFailureImage,
  RetryBtnStyling,
  NoSearchResultsContainer,
  NoSearchResultp,
  FailureViewImage,
  FailureViewContainer,
  RetryFailureButton,
  FailureHeadingWrong,
  NoSearchResultsHeading,
  SomethingWrongDes,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProcess: 'INPROCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    isPremiumNotDisplay: false,
    inputSearch: '',
  }

  componentDidMount() {
    this.getTheDataOfVideos()
  }

  handleCancelButton = () => {
    this.setState({isPremiumNotDisplay: true})
  }

  handleInputSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  handleSearchBtnInput = () => {
    this.getTheDataOfVideos()
  }

  premiumPrepaidBanner = () => {
    const {isPremiumNotDisplay} = this.state
    return (
      <div>
        {!isPremiumNotDisplay && (
          <PremiumContainer className="premium-container">
            <PremiumCardContainer className="premium-card-container">
              <PremiumNxtWatchLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="Nxt Watch Logo"
                className="premium-nxtwatch-logo"
              />
              <PremiumCancelButton
                type="button"
                className="premium-cancel-button"
                data-testid="close"
                onClick={this.handleCancelButton}
              >
                <PremiumCancelIcon className="premium-cancel-icon" />
              </PremiumCancelButton>
            </PremiumCardContainer>
            <PremiumTextStyling className="premium-text-styling">
              Buy Nxt Watch Premium
              <br />
              prepaid plans with UPI
            </PremiumTextStyling>
            <PremiumButtonGetItNow className="premium-button-getItNow">
              GET IT NOW
            </PremiumButtonGetItNow>
          </PremiumContainer>
        )}
      </div>
    )
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

  getTheDataOfVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProcess})
    const {inputSearch} = this.state

    const JwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputSearch}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }

    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const updateVideoList = this.updateFetchedData(data.videos)
        this.setState({
          videosList: updateVideoList,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      console.error('Error fetching data: ', error)
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleHomeVideosList = () => {
    const {videosList} = this.state
    return (
      <UnorderedListType className="unorder-list-type">
        {videosList.map(eachItem => (
          <HomeVideoItem key={eachItem.id} videoItems={eachItem} />
        ))}
      </UnorderedListType>
    )
  }

  handleLoading = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  handleSearchFailure = () => {
    console.log('dinesh')
    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          return (
            <NoSearchResultsContainer className="no-search-results-container">
              <SearchFailureImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
                className="search-failure-image"
              />
              <NoSearchResultsHeading themeChange={changeTheme}>
                No Search results found
              </NoSearchResultsHeading>
              <NoSearchResultp className="no-search-resultp">
                Try different key words or remove search
                <br />
                filter
              </NoSearchResultp>
              <RetryBtnStyling
                type="button"
                className="retry-btn-styling"
                onClick={this.getTheDataOfVideos}
              >
                Retry
              </RetryBtnStyling>
            </NoSearchResultsContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  handleFailureView = () => {
    console.log('oo')
    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          return (
            <FailureViewContainer className="failure-view-container">
              <FailureViewImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
                className="failure-view-image"
              />
              <FailureHeadingWrong
                themeChange={changeTheme}
                className="failure-heading-wrong"
              >
                Oops! Something Went Wrong
              </FailureHeadingWrong>
              <SomethingWrongDes themeChange={changeTheme}>
                We are having some trouble to complete
                <br />
                your request. Please try again
              </SomethingWrongDes>
              <RetryFailureButton
                type="button"
                className="retry-failure-button"
                onClick={this.getTheDataOfVideos}
              >
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
        return this.handleHomeVideosList()
      case apiStatusConstants.failure:
        return this.handleFailureView()
      case apiStatusConstants.inProcess:
        return this.handleLoading()
      default:
        return null
    }
  }

  render() {
    const {videosList, apiStatus} = this.state
    const showFailureMsg =
      apiStatus === apiStatusConstants.success && videosList.length === 0

    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          return (
            <HomeContainer
              data-testid="home"
              isDarkTheme={changeTheme}
              style={{backgroundColor: changeTheme ? 'black' : '#f9f9f9'}}
            >
              <Header />
              <div className="home-navbar-container">
                <NavbarDisplay className="navbar-display">
                  <NavbarDashboard />
                </NavbarDisplay>

                <PremiumVideosRightContainer className="premium-videos-right-container">
                  {this.premiumPrepaidBanner()}
                  <SearchContainer className="search-container">
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      className="search-input"
                      onChange={this.handleInputSearch}
                    />
                    <SearchIconContainer
                      type="button"
                      className="search-icon-container"
                      onClick={this.handleSearchBtnInput}
                    >
                      <FaSearch className="search-icon" />
                    </SearchIconContainer>
                  </SearchContainer>
                  {showFailureMsg
                    ? this.handleSearchFailure()
                    : this.handleApiStatusConstants()}
                </PremiumVideosRightContainer>
              </div>
            </HomeContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Home
