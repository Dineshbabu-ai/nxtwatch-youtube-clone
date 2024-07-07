import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  padding: 20px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const TitlesTextContainer = styled.div`
  padding: 20px;
`

export const TitleVideoDetails = styled.p`
  color: black;
  font-weight: 500;
  font-size: 18px;
`

export const YearsViewsLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ViewsYearsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  color: #7e858e;
  font-family: 'Roboto';
  padding: 0px;
  margin: 0px;
  width: 170px;
  justify-content: space-between;
`

export const UnorderListVideo = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  width: 300px;
  align-items: center;
  justify-content: space-between;
`

export const ButtonLikeDislike = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const LikeBtnIconContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #7e858e;
  font-weight: 500;
`

export const IconStyles = styled.span`
  width: 30px;
  height: 30px;
  color: ${({isActive}) => (isActive ? '#3b82f6' : '#7e858e')};
`

export const HorizontalLine = styled.hr`
  color: #7e858e;
`

export const ProfileSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ProfileImgSubStyling = styled.img`
  width: 60px;
  height: 60px;
`

export const ProfileNameSub = styled.p`
  color: black;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
`

export const ProfileSubscriber = styled.p`
  color: #7e858e;
  font-weight: 500;
  padding: 0px;
  margin: 0px;
`

export const ProfileNameSubContainer = styled.div`
  margin-left: 20px;
`

export const ProfileDescription = styled.p`
  color: #7e858e;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    margin-left: 80px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImage = styled.img`
  width: 100%;
  max-width: 300px;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  color: #000;
`

export const RetryButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
`

export const VideoDetailsNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const NavbarDisplay = styled.div`
  display: flex;
`

export const PremiumVideosRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.themeChange ? 'black' : 'white')};
`
export const TitleVideoDetail = styled.p`
  color: ${props => (props.themeChange ? 'white' : 'black')};
`

export const TitleSubSub = styled.p`
  color: ${props => (props.themeChange ? 'white' : 'black')};
`
export const DescriptionSub = styled.p`
  color: ${props => (props.themeChange ? 'white' : '#94a3b8')};
`
