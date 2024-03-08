import PropTypes from 'prop-types'

function Tags({ tags }) {
  return (
    <div className="tags">
      {/* {tags.map(({ tag }) => (
        <div key={tag}>
          <Tag tag={tag} />
          {console.log(tag)}
        </div>
      ))} */}
      {tags}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array,
}

export default Tags
