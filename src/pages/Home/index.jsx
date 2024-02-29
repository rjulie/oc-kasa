import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardsItems from '../../components/CardsItems'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Banner
        title={'Chez vous, partout et ailleurs'}
        cover={'assets/landscape-homepage.jpg'}
      />
      <CardsItems />
      <Footer />
    </div>
  )
}

export default Home
