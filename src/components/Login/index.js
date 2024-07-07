import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  BgContainer,
  CardLoginContainer,
  CardAlign,
  NxtwatchLogoContainer,
  NxtwatchLogo,
  InputStyling,
  LabelStyling,
  LoginCard,
  ShowPasswordContainer,
  ShowPasswordCheckboxInput,
  ShowPasswordCheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'
import SavedContext from '../../context/SavedContext'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isErrorMsg: false,
    showErrorMsg: '',
    showPassword: false,
  }

  handleSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  handleFailure = error => {
    this.setState({showErrorMsg: error, isErrorMsg: true})
  }

  onSubmitCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.handleSuccess(data.jwt_token)
    } else {
      this.handleFailure(data.error_msg)
    }
  }

  handleUsername = event => {
    this.setState({username: event.target.value})
  }

  handlePassword = event => {
    this.setState({password: event.target.value})
  }

  handleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  cardNxtwatch = () => {
    const isLogin = Cookies.get('jwt_token')
    if (isLogin !== undefined) {
      return <Redirect to="/" />
    }
    const {showPassword, showErrorMsg, isErrorMsg} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          return (
            <LoginCard themeChange={changeTheme}>
              <CardAlign themeChange={changeTheme}>
                <NxtwatchLogoContainer>
                  {changeTheme ? (
                    <NxtwatchLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <NxtwatchLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}
                </NxtwatchLogoContainer>

                <form onSubmit={this.onSubmitCredentials}>
                  <LabelStyling htmlFor="username" themeChange={changeTheme}>
                    USERNAME
                  </LabelStyling>
                  <InputStyling
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={this.handleUsername}
                    themeChange={changeTheme}
                  />
                  <br /> <br />
                  <LabelStyling htmlFor="password" themeChange={changeTheme}>
                    PASSWORD
                  </LabelStyling>
                  <InputStyling
                    type={inputType}
                    placeholder="Password"
                    id="password"
                    onChange={this.handlePassword}
                    themeChange={changeTheme}
                  />
                  <ShowPasswordContainer>
                    <ShowPasswordCheckboxInput
                      type="checkbox"
                      id="checkbox"
                      onClick={this.handleShowPassword}
                    />
                    <ShowPasswordCheckboxLabel
                      htmlFor="checkbox"
                      themeChange={changeTheme}
                    >
                      Show Password
                    </ShowPasswordCheckboxLabel>
                  </ShowPasswordContainer>
                  {isErrorMsg && <ErrorMessage>{showErrorMsg}</ErrorMessage>}
                  <LoginButton type="submit">Login</LoginButton>
                </form>
              </CardAlign>
            </LoginCard>
          )
        }}
      </SavedContext.Consumer>
    )
  }

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {changeTheme} = value
          console.log(changeTheme)
          return (
            <BgContainer themeChange={changeTheme}>
              {this.cardNxtwatch()}
            </BgContainer>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Login
