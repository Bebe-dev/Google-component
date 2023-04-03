import React from 'react'
import './style/searchBar.css'

const Button = (props) => {
  const {value} = props;
  return(
    <div>
      <button className="button">{value}</button>
    </div>
  )
}

export default Button