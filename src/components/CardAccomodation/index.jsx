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
      <div>
        <div>
          <Title title={appartment.title} location={appartment.location} />
          <div>
            <Tags tags={appartment.tags} />
          </div>
        </div>
        <div>
          <Avatar />
          <Rating rating={appartment.rating} />
        </div>
      </div>
      <div className="card-collapse">
        <Collapse
          title="Description"
          description={appartment.description}
          width="552px"
        />
        <Collapse
          title="Équipements"
          equipments={appartment.equipments}
          width="582px"
        />
      </div>
    </div>
  )
}

CardAccomodation.propTypes = {
  appartment: PropTypes.object,
}

export default CardAccomodation
