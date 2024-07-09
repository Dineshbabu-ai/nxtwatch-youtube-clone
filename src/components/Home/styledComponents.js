import styled from 'styled-components'
import {MdCancel} from 'react-icons/md'
import {FaSearch} from 'react-icons/fa'

// Styled components
export const HomeContainer = styled.div`
  .home-navbar-contianeR {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }
`

export const PremiumNxtWatchLogo = styled.img`
  height: 45px;
  width: 130px;
`

export const PremiumCancelIcon = styled(MdCancel)`
  height: 25px;
  width: 25px;
`

export const PremiumCancelButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const PremiumCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const PremiumContainer = styled.div`
  background-color: white;
  padding: 25px;
  padding-left: 50px;
  padding-right: 80px;

  @media screen and (min-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
`

export const PremiumButtonGetItNow = styled.button`
  color: #313131;
  background-color: white;
  font-weight: bold;
  width: 130px;
  height: 50px;
`

export const PremiumTextStyling = styled.p`
  color: #231f20;
  font-size: 20px;
  font-weight: 500;
`

export const SearchContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const SearchIconContainer = styled.button`
  background-color: #f9f9f9;
  width: 100px;
  height: 40px;
  border-color: #ccc;
  border-style: solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SearchIcon = styled(FaSearch)`
  color: #909090;
`

export const UnorderedListType = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0px;

  @media screen and (max-width: 575.98x) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const NavbarDisplay = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 200px;
    height: 100vh;
  }
`

export const PremiumVideosRightContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`

export const SearchFailureImage = styled.img`
  width: 100%;
  padding: 50px;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 450px;
  }
`

export const RetryBtnStyling = styled.button`
  background-color: #4f46e5;
  color: white;
  font-weight: bold;
  width: 100px;
  height: 50px;
  border-width: 0px;
  border-radius: 10px;
  font-family: 'roboto';
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    background-color: #4f46e5;
    color: white;
    font-weight: bold;
    width: 100px;
    height: 50px;
    border-width: 0px;
    border-radius: 10px;
    font-family: 'roboto';
    margin-top: 20px;
  }
`

export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 100vh;
`

export const NoSearchResultp = styled.p`
  padding: 0px;
  margin: 0px;
  color: #606060;
  font-weight: 500;
  font-family: 'roboto';
  text-align: center;
`

export const FailureViewImage = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 400px;
  }
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 50px;
  align-items: center;
  justify-content: center;
`

export const RetryFailureButton = styled.button`
  color: white;
  font-weight: bold;
  background-color: #4f46e5;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  border-width: 0px;
`

export const FailureHeadingWrong = styled.h1`
  font-size: 25px;
  color: ${props => (props.themeChange ? 'white' : 'black')};
`
export const NoSearchResultsHeading = styled.h2`
  color: ${props => (props.themeChange ? 'white' : 'black')};
`
export const SomethingWrongDes = styled.p`
  color: ${props => (props.themeChange ? 'white' : 'black')};
  text-align: center;
`
