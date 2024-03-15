import PropTypes from 'prop-types'
import Avatar from '../../components/Avatar'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Tags from '../../components/Tags'
import Title from '../../components/Title'
// import Slideshow from '../../components/Slideshow'

function CardAccomodation({ appartment }) {
  return (
    <div className="card-accomodation">
      {/* <Slideshow /> */}
      <div className="card-info">
        <div>
          <Title title={appartment.title} location={appartment.location} />
          <Tags tags={appartment.tags} />
        </div>
        <div>
          {appartment.host ? (
            <Avatar
              name={appartment.host.name}
              picture={appartment.host.picture}
            />
          ) : null}
          {appartment.rating ? <Rating rating={appartment.rating} /> : null}
        </div>
      </div>
      <div className="card-collapse">
        <div style={{ width: '45%' }}>
          <Collapse title="Description" description={appartment.description} />
        </div>
        <div style={{ width: '45%' }}>
          <Collapse title="Équipements" equipments={appartment.equipments} />
        </div>
      </div>
    </div>
  )
}

CardAccomodation.propTypes = {
  appartment: PropTypes.object,
}

export default CardAccomodation
