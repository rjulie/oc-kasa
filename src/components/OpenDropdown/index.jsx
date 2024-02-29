import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function OpenDropdown({ title, description }) {
  return (
    <div>
      <div className="dropdown-item">
        <h2>{title}</h2>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <p className="dropdown-text">{description}</p>
    </div>
  )
}

export default OpenDropdown
