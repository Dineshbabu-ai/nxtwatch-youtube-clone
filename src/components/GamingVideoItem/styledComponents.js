import {Link} from 'react-router-dom'
import styled from 'styled-components'

// Styled components
export const LinkContainer = styled(Link)`
  list-style-type: none;
  text-decoration: none;
`

export const GamingVideoContainer = styled.li`
  margin: 15px;

  @media screen and (max-width: 575.98px) {
    min-width: 130px;
    max-width: 130px;
    margin: 13px;
  }
`

export const GamingThumbnail = styled.img`
  width: 100%;
  height: 240px;
  margin-bottom: 15px;
  @media screen and (max-width: 575.98px) {
    width: 100%;
    height: 200px;
  }
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
