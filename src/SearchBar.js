import React from 'react'
import search from './Images/search_icon.svg.png'
import mic from './Images/Google_mic.svg.png'
import lens from './Images/Google_lens.png'

const SearchBar = () => {
  return(
    <div className="input-div">
      <img src={search} alt="search-icon" className="search-icon"/>
      <input className="input"/>
      <img src={mic} alt="google-mic" className="mic"/>
      <img src={lens} alt="google-lens" className="lens"/>
    </div>  
  )
}

export default SearchBar;