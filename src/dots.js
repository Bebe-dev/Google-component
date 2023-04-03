import dots from './Images/3-by-3-dots.png'

const Dot = () => {
  return(
    <div>
      <img src = {dots} alt = "dot" style={{width:"15px"}}/>
    </div>
  )
}

export default Dot;