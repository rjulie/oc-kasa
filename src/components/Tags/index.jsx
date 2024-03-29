import PropTypes from 'prop-types'

function Tags({ tags }) {
  return (
    <div>
      {tags ? (
        <div className="tags">
          {tags.map((tag, index) => (
            <div className="tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array,
}

export default Tags
