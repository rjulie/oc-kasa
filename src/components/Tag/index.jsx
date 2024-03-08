import PropTypes from 'prop-types'

function Tag({ tag }) {
  return <div className="tag">{tag}</div>
}

Tag.propTypes = {
  tag: PropTypes.string,
}

export default Tag
