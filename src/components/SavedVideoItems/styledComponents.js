import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ThumbnailImage = styled.img`
  max-width: 150px;
  min-width: 150px;
  height: 100px;

  @media screen and (min-width: 768px) {
    max-width: 350px;
    min-width: 350px;
    height: 200px;
  }
`

export const TitleText = styled.p`
  color: ${props => (props.themeChange ? '#f8fafc' : 'black')};
  font-weight: 500;
  font-size: 13px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ChannelText = styled.p`
  color: #7e858e;
  font-weight: 500;
  font-size: 13px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  margin-left: 15px;
  margin-right: 15px;
`

export const TextContainer = styled.div`
  margin-left: 10px;
`

export const LinkContainerStyle = styled(Link)`
  list-style-type: none;
  text-decoration: none;
`

export const ViewsYearsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #7e858e;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  p {
    margin: 0 5px;
  }
`
