import React from 'react'
import UpperFooter from './upperFooter'
import LowerFooter from './lowerFooter'
import './style/footer.css'

const Footer = () => {
  return(
    <div className="footer">
      <UpperFooter location={"Nigeria"}/>
      <LowerFooter/>
    </div>  
  )
}

export default Footer