import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapse({ title, description = null, equipments = null, width }) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    if (open) {
      return setOpen(false)
    }
    setOpen(true)
  }

  return (
    <div className="collapse">
      <div className="collapse-item" style={{ width: width }}>
        <h2>{title}</h2>
        <span>
          {open ? (
            <FontAwesomeIcon icon={faChevronDown} onClick={() => toggle()} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} onClick={() => toggle()} />
          )}
        </span>
      </div>
      <div className={open ? 'collapse-text show' : 'collapse-text'}>
        {equipments ? (
          <div className="collapse-content" style={{ width: width }}>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </div>
        ) : null}
        {description ? (
          <div className="collapse-content" style={{ width: width }}>
            {description}
          </div>
        ) : null}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  equipments: PropTypes.array,
  width: PropTypes.string,
}

export default Collapse
