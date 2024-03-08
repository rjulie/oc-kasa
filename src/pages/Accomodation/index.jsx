import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardAccomodation from '../../components/CardAccomodation'

function Accomodation() {
  const { idAccomodation } = useParams()
  const [appartment, setAppartment] = useState({})

  useEffect(() => {
    ;(() => {
      fetch('../logements.json')
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          const result = data.find((item) => item.id === idAccomodation)
          setAppartment(result)
        })
        .catch((error) => {
          console.log(error)
        })
    })()
  }, [])

  useEffect(() => {
    console.log(appartment)
  }, [appartment])

  return (
    <div>
      <div>
        {appartment ? <CardAccomodation appartment={appartment} /> : null}
      </div>
    </div>
  )
}

export default Accomodation
