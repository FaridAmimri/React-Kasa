import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './Dropdown.scss'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0)'
  const rotation = { transform: rotate, transition: '0.4s ease-in-out' }

  return (
    <div className="dropdown">
      <div className="dropdown-box" onClick={(e) => {setIsOpen(!isOpen)}}>
        <span>Fiabilité</span>
        <FaChevronDown style={rotation} />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </div>
      )}
    </div>
  )
}

export default Dropdown