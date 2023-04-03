import React from 'react'
import Button from './button'
import './style/searchBar.css'


const ButtonComponent = () => {
  return(
    <div className="buttons">
      <Button value={'Google Search'}/>
      <Button value={'I\'m feeling lucky'}/>
    </div>  
  )
}

export default ButtonComponent