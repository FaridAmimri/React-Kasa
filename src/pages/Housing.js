/** @format */

import { useParams } from 'react-router-dom'
import Carousel from '../components/carousel/Carousel'
import Locality from '../components/locality/Locality'
import Host from '../components/host/Host'
import Stars from '../components/stars/Stars'

function Housing(props) {
  const { id } = useParams()

  return (
    <>
      {props.data
        .filter((house) => house.id === id)
        .map((house, index) => (
          <main>
            <Carousel key={index} imgList={house.pictures} />
            <section>
              <article>
                <Locality key={house.title} house={house} />
              </article>
              <aside>
                <Host key={house.id} host={house.host} />
                <Stars key={house.name} rate={house.rating} />
              </aside>
            </section>
          </main>
        ))}
    </>
  )
}

export default Housing
