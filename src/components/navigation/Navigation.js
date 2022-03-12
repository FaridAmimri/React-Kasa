/** @format */
import { NavLink } from 'react-router-dom';
import './navigation.scss'


function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <NavLink to='/' className={(nav) => nav.isActive ? "nav-active" : ""}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to='/about' className={(nav) => nav.isActive ? "nav-active" : ""}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
