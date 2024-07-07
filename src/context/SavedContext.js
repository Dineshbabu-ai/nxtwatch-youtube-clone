import React from 'react'

const SavedContext = React.createContext({
  savedList: [],
  saveVideoItem: () => {},
  deleteSavedVideos: () => {},
  likeVideoItem: () => {},
  dislikeVideoItem: () => {},
  themeChange: () => {},
})

export default SavedContext
