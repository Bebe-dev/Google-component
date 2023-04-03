import maleface from "./Images/maleface.svg"

const Avatar = () => {
  return(
    <img src={maleface} alt="avatar" style={{height: "40px", width:"40px", borderRadius: "50%"}} />  
  )
}

export default Avatar;