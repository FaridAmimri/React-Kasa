/** @format */

import { useParams } from 'react-router-dom'
import Carousel from '../components/carousel/Carousel'
import Locality from '../components/locality/Locality'


function Housing(props) {
  const { id } = useParams()

  return (
    <div className='body'>
      {props.data.filter(house => house.id === id).map((house, index) => (
        <div className='main'>
          <Carousel key={index} imgList={house.pictures} />
          <Locality key={house.id} house={house}/>
        </div>
      ))}
    </div>
  )
}

export default Housing
