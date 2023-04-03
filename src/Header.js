import React from 'react'
import MenuItem from "./menuItem"
import Dot from "./dots"
import Avatar from "./avatar"
import "./style/header.css"

const Header = () => {
  return(
    <div className = "header">
      <MenuItem className="menu-item" title={"Gmail"} />
      <MenuItem className="menu-item" title={"Images"} />
      <Dot/>
      <Avatar/>
    </div>  
  )
  
}

export default Header;