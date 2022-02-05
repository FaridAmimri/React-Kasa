import { NavLink } from 'react-router-dom';
import './Card.scss'

function Card({ house }) {
  return (
    <li className="card">
      <NavLink to='/housing'>
      <img src={house.cover} alt="" />
      <h4>{house.title}</h4>
      </NavLink>
    </li>
  )
}

export default Card

