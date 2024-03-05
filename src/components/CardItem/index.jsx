import PropTypes from 'prop-types'

function CardItem({ title, cover }) {
  return (
    <div
      className="card-item"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(10, 10, 10, 0.00) 42%, rgba(4, 4, 4, 0.20) 99.99%, rgba(0, 0, 0, 0.50) 100%), url('${cover}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '340px',
      }}
    >
      <h2>{title}</h2>
    </div>
  )
}

CardItem.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
}

export default CardItem
