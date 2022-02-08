// import { useState } from 'react'
import './Carousel.scss'

function Carousel({ house,imgList}) {
  // const [data, setData] = useState([])

  return (
    <div className="carousel">
      {imgList.map((item, index) => {
        return (
    
            <img key={index} src={item} alt="location" />
 
        )
      }
      )}
    </div>
  
)}

export default Carousel
