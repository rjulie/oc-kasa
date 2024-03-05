import PropTypes from 'prop-types'

function Title({ title, location }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{location}</div>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
}

export default Title
