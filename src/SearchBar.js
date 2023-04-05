import React from 'react'
import { useState } from 'react'
import search from './Images/search_icon.svg.png'
import mic from './Images/Google_mic.svg.png'
import lens from './Images/Google_lens.png'

const SearchBar = () => {
  const inputValue = document.querySelector('.input');
  const [word, setWord] = useState('');
  const enterKey = (e) => {
    if(e.key==="Enter"){;
      setWord(word + e.target.value);
      inputValue.value = ''
    }
  };
  return(
    <>
      <div className="input-div">
        <img src={search} alt="search-icon" className="search-icon"/>
        <input onKeyPress={enterKey} className="input"/>
        <img src={mic} alt="google-mic" className="mic"/>
        <img src={lens} alt="google-lens" className="lens"/>
      </div>  
      <div>
        <p>{word}</p>
      </div>
    </>
  )
}

export default SearchBar;