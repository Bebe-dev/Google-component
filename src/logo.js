import React from 'react'
import GoogleLogo from './Images/Google_logo.svg.png'

const Logo = () => {
  return(
    <div class="google-logo">
      <img src={GoogleLogo} alt="google-logo" style={{width:"30%"}}/>  
    </div>
  )
}

export default Logo;