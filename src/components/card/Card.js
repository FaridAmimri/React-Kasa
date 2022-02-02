import './card.scss'

function Card({ house }) {
  return (
    <li className="card">
      <img src={house.cover} alt="" />
      <h4>{house.title}</h4>
    </li>
  )
}

export default Card
