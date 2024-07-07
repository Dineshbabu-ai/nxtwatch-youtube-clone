import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import SavedContext from './context/SavedContext'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {savedVideoList: [], themeChange: false}

  saveVideoItem = savedVideo => {
    const {savedVideoList} = this.state

    if (savedVideoList.some(eachItem => eachItem.id === savedVideo.id)) {
      this.deleteSavedVideos(savedVideo)
    } else {
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, savedVideo],
      }))
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({themeChange: !prevState.themeChange}))
  }

  deleteSavedVideos = savedVideo => {
    const {savedVideoList} = this.state
    const updatedList = savedVideoList.filter(
      eachItem => eachItem.id !== savedVideo.id,
    )
    this.setState(prevState => ({
      savedVideoList: updatedList,
    }))
  }

  render() {
    const {savedVideoList, themeChange, isSaved} = this.state
    return (
      <SavedContext.Provider
        value={{
          savedList: savedVideoList,
          saveVideoItem: this.saveVideoItem,
          deleteSavedVideos: this.deleteSavedVideos,
          toggleTheme: this.toggleTheme,
          changeTheme: themeChange,
          isSavedBtn: isSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SavedContext.Provider>
    )
  }
}

export default App
