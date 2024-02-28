import { appartmentList } from '../../data/list'
import CardItem from '../../components/CardItem'

function Container() {
  return (
    <div>
      <ul className="">
        {appartmentList.map(({ id, cover, title }) => (
          <div key={id}>
            <CardItem cover={cover} title={title} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Container
