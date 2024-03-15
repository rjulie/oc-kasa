import Banner from '../../components/Banner'
import CardsItems from '../../components/CardsItems'

function Home() {
  return (
    <div className="home">
      <Banner
        title={'Chez vous, partout et ailleurs'}
        cover={'assets/landscape-homepage.jpg'}
      />
      <CardsItems />
    </div>
  )
}

export default Home
