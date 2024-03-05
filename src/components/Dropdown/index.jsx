import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

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

Dropdown.propTypes = {
  title: PropTypes.string,
}

export default Dropdown
