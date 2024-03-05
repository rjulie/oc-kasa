import PropTypes from 'prop-types'

function Avatar({ picture, name }) {
  return (
    <div>
      <div>{picture}</div>
      <div>{name}</div>
    </div>
  )
}

Avatar.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
}

export default Avatar
