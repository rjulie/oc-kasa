import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import OpenDropdown from '../../components/OpenDropdown'
import { aboutList } from '../../data/about.js'

function About() {
  return (
    <div>
      <Header />
      <Banner cover={'assets/landscape-kalen-emsley.jpg'} />
      <div className="dropdowns">
        {aboutList.map(({ id, title, description }) => (
          <div key={id}>
            <OpenDropdown title={title} description={description} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default About
