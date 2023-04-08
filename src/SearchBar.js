import React, { useState } from 'react'
import search from './Images/search_icon.svg.png'
import mic from './Images/Google_mic.svg.png'
import lens from './Images/Google_lens.png'

const SearchBar = () => {
  const [word, setWord] = useState('');
  const [input, setInput] = useState('')
  
  const handleChange = (e) => {
    const newWord = e.target.value
    setInput(newWord)
    
  }
  const enterKey = (e) => {
    if(e.key==="Enter"){
      if(input!==""){
        setWord(input)
        setInput("")
      } else{
        alert("You have to type an input")
      }
      
    }
  };
  return(
    <>
      <div className="input-div">
        <img src={search} alt="search-icon" className="search-icon"/>
        <input onKeyPress={enterKey} className="input" value={input} onChange={handleChange}/>
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