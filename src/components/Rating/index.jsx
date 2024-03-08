import PropTypes from 'prop-types'

function Rating({ rating }) {
  return <div>{rating}</div>
}

Rating.propTypes = {
  rating: PropTypes.string,
}

export default Rating
