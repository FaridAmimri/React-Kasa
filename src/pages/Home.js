/** @format */

import Banner from '../components/banner/Banner'
import Gallery from '../components/gallery/Gallery'

function Home(props) {
  return (
    <>
      <Banner />
      <Gallery data={props.data} />
    </>
  )
}

export default Home

