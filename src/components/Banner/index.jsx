import PropTypes from 'prop-types'

function Banner({ title = null, cover }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${cover}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h1>{title}</h1>
    </div>
  )
}

Banner.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
}

export default Banner
