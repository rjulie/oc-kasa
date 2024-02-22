import { useParams } from 'react-router-dom'

function Accomodation() {
  const { idAccomodation } = useParams()

  return (
    <div>
        <h1>Test {idAccomodation}</h1>
    </div>
  )
}

export default Accomodation
