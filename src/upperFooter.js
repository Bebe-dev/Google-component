import React from 'react'
import './style/footer.css'

const UpperFooter = (props) => {
  const {location} = props;
  return(
   <p className="location">{location}</p>  
  )
}

export default UpperFooter