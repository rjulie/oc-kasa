import { Link } from 'react-router-dom'
import CardItem from '../../components/CardItem'
import { useEffect, useState } from 'react'

function CardsItems() {
  const [appartmentList, setAppartmentList] = useState([])

  useEffect(() => {
    ;(() => {
      fetch('logements.json')
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          setAppartmentList(data)
        })
        .catch((error) => {
          console.log(error)
        })
    })()
  }, [])

  return (
    <div className="container">
      <div className="cards-items">
        {appartmentList.map(({ id, cover, title }) => (
          <Link to={'/accomodation/' + id} key={id} className="link-card">
            <div key={id}>
              <CardItem cover={cover} title={title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CardsItems
