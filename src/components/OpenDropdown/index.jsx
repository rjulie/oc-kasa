import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import PropTypes from 'prop-types'

function OpenDropdown({ title, description = null }) {
  const [open, setOpen] = useState(null)

  const toggle = () => {
    if (open === true) {
      return setOpen(null)
    }
    setOpen(true)
  }

  return (
    <div className="dropdown">
      <div className="dropdown-item" onClick={() => toggle()}>
        <h2>{title}</h2>
        <span>
          {open === true ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </div>
      <div className={open === true ? 'dropdown-text show' : 'dropdown-text'}>
        <p>{description}</p>
      </div>
    </div>
  )
}

OpenDropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default OpenDropdown
