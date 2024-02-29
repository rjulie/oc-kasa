import { appartmentList } from '../../data/list'
import CardItem from '../../components/CardItem'

function CardsItems() {
  return (
    <div className="container">
      <div className="cards-items">
        {appartmentList.map(({ id, cover, title }) => (
          <div key={id}>
            <CardItem cover={cover} title={title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsItems
