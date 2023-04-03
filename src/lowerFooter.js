import React from 'react'
import LowerFooterItems from './lowerFooterItems'
import './style/footer.css'


const LowerFooter = () => {
  return(
    <div className="lower-footer">
      <ul>
        <LowerFooterItems items={"About"}/>
        <LowerFooterItems items={"Advertising"}/>
        <LowerFooterItems items={"Business"}/>
        <LowerFooterItems items={"How search works"}/>
      </ul>
      <ul>
        <LowerFooterItems items={"Carbon neutral since 2017"}/>
      </ul>
      <ul>
        <LowerFooterItems items={"Privacy"}/>
        <LowerFooterItems items={"Terms"}/>
        <LowerFooterItems items={"Settings"}/>
      </ul>
    </div>  
  )
}

export default LowerFooter