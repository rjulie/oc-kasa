import Banner from '../../components/Banner'
import Dropdowns from '../../components/Dropdowns'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function About() {
  return (
    <div>
      <Header />
      <Banner cover={'assets/landscape-kalen-emsley.jpg'} />
      <Dropdowns />
      <Footer />
    </div>
  )
}

export default About
