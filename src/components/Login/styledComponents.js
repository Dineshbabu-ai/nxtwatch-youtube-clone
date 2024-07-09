import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.themeChange ? '#212121' : 'white')};
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    background-color: ${props => (props.themeChange ? '#212121' : 'white')};
    width: 100%;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const CardLoginContainer = styled.div`
  padding: 20px;
`

export const CardAlign = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`

export const NxtwatchLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NxtwatchLogo = styled.img`
  width: 120px;
  height: 40px;
  margin-bottom: 15px;
`

export const InputStyling = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  color: ${props => (props.themeChange ? 'white' : 'black')};
  border-color: ${props => (props.themeChange ? '#7e858e' : '#f1f5f9')};
  border-radius: 5px;
  background-color: ${props => (props.themeChange ? 'transparent' : '')};
`

export const LabelStyling = styled.label`
  font-weight: bold;
  color: ${props => (props.themeChange ? 'white' : '#7e858e')};
  font-size: 14px;
`

export const LoginCard = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background-color: ${props => (props.themeChange ? 'black' : 'white')};
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 30%;
  }
  @media screen and (max-width: 578.98px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 991.98px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) and (max-width: 1199.98px) {
    width: 40%;
  }
  @media screen and (min-width: 1200px) {
    width: 30%;
  }
`

export const ShowPasswordContainer = styled.div`
  margin-top: 10px;
`

export const ShowPasswordCheckboxInput = styled.input`
  width: 15px;
  height: 15px;
`

export const ShowPasswordCheckboxLabel = styled.label`
  font-weight: 500;
  color: ${props => (props.themeChange ? 'white' : '#606060')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  margin-top: 30px;
  width: 100%;
  height: 40px;
  font-weight: bold;
  border-radius: 10px;
  border-style: solid;
  border-width: 0px;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: red;
`
