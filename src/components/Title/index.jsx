import PropTypes from 'prop-types'

function Title({ title, location }) {
  return (
    <div className="card-title">
      <h1>{title}</h1>
      <div className="location">{location}</div>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
}

export default Title
