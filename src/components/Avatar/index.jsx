import PropTypes from 'prop-types'

function Avatar({ picture, name }) {
  return (
    <div>
      <div>{name}</div>
      <div>{picture}</div>
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
}

export default Avatar
