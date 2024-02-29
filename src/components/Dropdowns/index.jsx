import OpenDropdown from '../../components/OpenDropdown'
import { aboutList } from '../../data/about.js'

function Dropdowns() {
  return (
    <div className="dropdowns">
      {aboutList.map(({ id, title, description }) => (
        <div key={id}>
          <OpenDropdown title={title} description={description} />
        </div>
      ))}
    </div>
  )
}

export default Dropdowns
