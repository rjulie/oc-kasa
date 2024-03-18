import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapse({ title, description = null, equipments = null }) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    if (open) {
      return setOpen(false)
    }
    setOpen(true)
  }

  return (
    <div className="collapse">
      <div className="collapse-item">
        <h2>{title}</h2>
        <span>
          {open ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              onClick={() => toggle()}
              className="show"
            />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} onClick={() => toggle()} />
          )}
        </span>
      </div>
      <div className={open ? 'collapse-text show' : 'collapse-text'}>
        {equipments ? (
          <div className="collapse-content">
            {equipments.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))}
          </div>
        ) : null}
        {description ? (
          <div className="collapse-content">{description}</div>
        ) : null}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  equipments: PropTypes.array,
}

export default Collapse
