import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardAccomodation from '../../components/CardAccomodation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Accomodation() {
  const { idAccomodation } = useParams()
  const [appartmentList, setAppartmentList] = useState([])

  useEffect(() => {
    ;(async () => {
      await fetch('public/logements.json')
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          console.log(data)
          // setAppartmentList(data)
        })
    })()
  }, [])

  console.log(appartmentList)

  const [appartment, setAppartment] = useState([])

  useEffect(() => {
    const result = appartmentList.find((item) => item.id === idAccomodation)
    setAppartment(result)
  }, [appartmentList, idAccomodation])

  console.log(appartment)

  return (
    <div>
      <Header />
      <div>
        <CardAccomodation />
      </div>
      <Footer />
    </div>
  )
}

export default Accomodation
