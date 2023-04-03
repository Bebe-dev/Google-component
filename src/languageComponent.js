import React from 'react'
import Language from './language'
import './style/searchBar.css'

const LanguageComponent = () => {
  return(
    <div className="lang">
      <p>Google offered in: </p>
      <Language value={'Hausa'}/>
      <Language value={'Igbo'}/>
      <Language value={'Èdè Yorùbá'}/>
      <Language value={'Nigerian Pidgin'}/>
    </div>
  )
}

export default LanguageComponent