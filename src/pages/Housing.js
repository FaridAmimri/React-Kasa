/** @format */

import Header from '../components/header/Header'
import Carousel from '../components/carousel/Carousel'
import { useParams } from 'react-router-dom'

function Housing(props) {
  const { id } = useParams()

  return (
    <>
      <Header />
      <Carousel imgList={props.data.pictures} />
    </>
  )
}

export default Housing

