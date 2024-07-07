import {Link} from 'react-router-dom'
import styled from 'styled-components'

// Styled components
export const LinkContainer = styled(Link)`
  list-style-type: none;
  text-decoration: none;
`

export const GamingVideoContainer = styled.li`
  margin: 15px;
`

export const GamingThumbnail = styled.img`
  width: 180px;
  height: 240px;
  margin-bottom: 15px;
`

export const GamingTitle = styled.p`
  font-weight: bold;
  padding: 0;
  margin: 5px;
  font-family: 'Roboto';
  color: ${props => (props.themeChange ? 'white' : 'black')};
`

export const GamingViewsCount = styled.p`
  font-weight: 500;
  padding: 0;
  margin: 5px;
  font-family: 'Roboto';
  color: #909090;
`

export const GamingWorldwideText = styled.p`
  font-weight: 500;
  padding: 0;
  margin: 5px;
  font-family: 'Roboto';
  color: #909090;
`
