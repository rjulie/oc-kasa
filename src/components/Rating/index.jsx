import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating({ rating }) {
  const [result, SetResult] = useState([])
  const full_count = parseInt(rating)
  const empty_count = 5 - full_count

  function result_stars(full_count, empty_count) {
    let rslt = []
    for (let i = 0; i < full_count; i++) {
      rslt.push('full')
    }
    for (let i = 0; i < empty_count; i++) {
      rslt.push('empty')
    }
    return rslt
  }

  useEffect(() => {
    SetResult(result_stars(full_count, empty_count))
  }, [])

  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <div className="rating">
      {result.map((item, index) =>
        item === 'full' ? (
          <FontAwesomeIcon icon={faStar} key={index} className="rating-full" />
        ) : (
          <FontAwesomeIcon icon={faStar} key={index} className="rating-empty" />
        )
      )}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string,
}

export default Rating
