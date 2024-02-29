import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Dropdown({ title }) {
  return (
    <div>
      <div className="dropdown-item">
        <h2>{title}</h2>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
  )
}

export default Dropdown
