/** @format */

import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Gallery from '../components/gallery/Gallery'
import Footer from '../components/footer/Footer'

function Home(props) {
  return (
    <>
      <Header />
      <Banner />
      <Gallery data={props.data} />
      <Footer />
    </>
  )
}

export default Home

