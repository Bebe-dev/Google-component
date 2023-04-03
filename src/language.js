import React from 'react'
import './style/searchBar.css'

const Language = (props) => {
  const {value} = props
  return(
    <>
      <ul className="lang-list">
        <li>{value}</li>
      </ul>
    </>
  )
}

export default Language