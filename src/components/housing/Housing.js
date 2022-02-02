import { useState,useEffect } from 'react'
import Card from '../card/Card'
import "./housing.scss"

function Housing() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./apartments.json')
    .then((res) => res.json())
    .then((res) => setData(res))
  },[])
  console.log(data)
  return (
    <div className="housing">
      <ul>
        {data.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </ul>
    </div>
  )
}

export default Housing
