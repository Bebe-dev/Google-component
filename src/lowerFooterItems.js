import React from 'react'
import './style/footer.css'

const LowerFooterItems = (props) => {
  const {items} = props
  return(
    <li>{items}</li>
  )
}

export default LowerFooterItems