import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './dropdown.scss'


function Dropdown({ title, children}) {
  const [isOpen, setIsOpen] = useState(false)
  const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0)'
  const rotation = { transform: rotate, transition: '0.6s ease-in-out' }

  return (
    <div className="dropdown">
      <div className="dropdown-box" onClick={(e) => {setIsOpen(!isOpen)}}>
        <span>{title}</span>
        <FaChevronDown style={rotation} />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown