/** @format */

import Header from '../components/header/Header'
import Carousel from '../components/carousel/Carousel'

function Housing(props) {
  return (
    <>
      <Header />
      <Carousel imgList={props.data[0].pictures} />
    </>
  )
}

export default Housing
