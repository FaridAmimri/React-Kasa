import { useState } from 'react'
import './Picture.scss'

function Picture({ house }) {
  // const [currImg, setCurrImg] = useState(0)

  return (
    <div className="picture">
      <img src={house.pictures} alt="" />
    </div>
  )
}

export default Picture
