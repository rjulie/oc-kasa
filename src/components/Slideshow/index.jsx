import PropTypes from 'prop-types'

function Slideshow({ pictures }) {
  return (
    <div className="slideshow">
      {/* {pictures.map(({ url, id, alt }) => (
        <div key={id}>
          <img src={url} alt={alt} />
        </div>
      ))} */}
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.array,
}

export default Slideshow
