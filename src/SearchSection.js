import React from 'react'
import Logo from './logo'
import SearchBar from './SearchBar'
import ButtonComponents from './buttonComponents'
import LanguageComponent from './languageComponent'
import './style/logo.css'
import './style/searchBar.css'

const SearchSection = () => {
  return(
    <div className="searchsection">
      <Logo/>
      <SearchBar/>
      <ButtonComponents/>
      <LanguageComponent/>
    </div>
  )
}

export default SearchSection