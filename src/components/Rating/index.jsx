import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

function Rating({ rating }) {
  const [result, SetResult] = useState([])
  const solid_count = parseInt(rating)
  const regular_count = 5 - solid_count

  function result_stars(solid_count, regular_count) {
    let rslt = []
    for (let i = 0; i < solid_count; i++) {
      rslt.push('solid')
    }
    for (let i = 0; i < regular_count; i++) {
      rslt.push('regular')
    }
    return rslt
  }

  useEffect(() => {
    SetResult(result_stars(solid_count, regular_count))
  }, [])

  useEffect(() => {
    console.log(result)
  }, [result])

  return (
    <div>
      {result.map(({ item, index }) =>
        item === 'solid' ? (
          <FontAwesomeIcon icon={faStarSolid} key={index} />
        ) : (
          <FontAwesomeIcon icon={faStarRegular} key={index} />
        )
      )}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string,
}

export default Rating
