import Banner from '../../components/Banner'
import Dropdowns from '../../components/Dropdowns'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
