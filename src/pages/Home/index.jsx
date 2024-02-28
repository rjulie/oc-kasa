import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Banner title={`Chez vous, partout et ailleurs`} />
      <Container />
      <Footer />
    </div>
  )
}

export default Home
