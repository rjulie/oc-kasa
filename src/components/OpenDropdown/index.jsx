import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function OpenDropdown({ title, description, index }) {
  const [open, setOpen] = useState(null)

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }
    setOpen(index)
  }

  return (
    <div className="dropdown">
      <div className="dropdown-item" onClick={() => toggle(index)}>
        <h2>{title}</h2>
        <span>
          {open === index ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </div>
      <div className={open === index ? 'dropdown-text show' : 'dropdown-text'}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default OpenDropdown
