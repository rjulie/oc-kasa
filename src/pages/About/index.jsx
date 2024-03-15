import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { aboutList } from '../../data/about.js'

function About() {
  return (
    <div>
      <Banner cover={'assets/landscape-kalen-emsley.jpg'} />
      <div className="about-collapses">
        {aboutList.map(({ id, title, description }) => (
          <div key={id}>
            <Collapse title={title} description={description} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
