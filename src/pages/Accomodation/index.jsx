import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardAccomodation from '../../components/CardAccomodation'

function Accomodation() {
  const { idAccomodation } = useParams()
  const [appartment, setAppartment] = useState({})
  const [equipmentsList, setEquipmentsList] = useState({})

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
    console.log(appartment.host)
    console.log(appartment.tags)
    const list = appartment.equipments
    console.log(list)
    setEquipmentsList(list)
  }, [appartment, equipmentsList])

  return (
    <div>
      <div>{appartment && <CardAccomodation appartment={appartment} />}</div>
    </div>
  )
}

export default Accomodation
