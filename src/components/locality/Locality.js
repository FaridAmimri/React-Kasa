import './Locality.scss'

function Locality({ house }) {
  return (
    <div className="locality">
      <h1>{house.title}</h1>
      <h4>{house.location}</h4>
    </div>
  )
}

export default Locality
