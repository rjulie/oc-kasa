import PropTypes from 'prop-types'

function Tag({ tags }) {
  return <div>{tags}</div>
}

Tag.propTypes = {
  tags: PropTypes.array,
}

export default Tag
