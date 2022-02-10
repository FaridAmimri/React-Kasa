import React from 'react'
import './Locality.scss'

function Locality({ house }) {
  return (
    <div className="locality">
      <h2>{house.title}</h2>
      <h4>{house.location}</h4>
    </div>
  )
}

export default Locality
