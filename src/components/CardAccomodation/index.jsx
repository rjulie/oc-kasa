// import { appartmentList } from '../../data/list'
// import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Avatar from '../../components/Avatar'
import Rating from '../../components/Rating'
import Title from '../../components/Title'

function CardAccomodation() {
  return (
    <div>
      {/* <Gallery key={`${id}`} cover={cover} /> */}
      <div>
        <div>
          <Title />
          <div>
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>
        <div>
          <Avatar />
          <Rating />
        </div>
      </div>
    </div>
  )
}

export default CardAccomodation
