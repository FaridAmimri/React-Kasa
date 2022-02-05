import { useState, useEffect } from 'react'
import Card from '../card/Card'
import './Gallery.scss'

function Gallery() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./apartments.json')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  return (
    <div className="gallery">
      <ul>
        {data.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </ul>
    </div>
  )
}

export default Gallery
