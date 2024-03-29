import PropTypes from 'prop-types'

function Avatar({ picture, name }) {
  return (
    <div className="avatar">
      <div className="avatar-name">
        <div>{name.split(' ')[0]}</div>
        <div>{name.split(' ')[1]}</div>
      </div>
      <img src={picture} alt={name} className="avatar-picture" />
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
}

export default Avatar
