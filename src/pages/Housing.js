/** @format */

import { useParams } from 'react-router-dom'
import Carousel from '../components/carousel/Carousel'
import Locality from '../components/locality/Locality'
import Tags from '../components/tags/Tags'
import Host from '../components/host/Host'
import Stars from '../components/stars/Stars'
import Dropdown from '../components/dropdown/Dropdown'

function Housing(props) {
  const { id } = useParams()
  const filterLocation = props.data
  .filter((house) => house.id === id)

  if(filterLocation.lenght === 0) {
    return <div>Pas de location</div>
  }
  return (
    <>
      {props.data
        .filter((house) => house.id === id)
        .map((house, index) => (
          <>
            <Carousel key={index} imgList={house.pictures} />
            <main>
              <article>
                <Locality key={house.title} house={house} />
                <Tags key={index} tagList={house.tags} />
              </article>
              <article>
                <Host key={house.id} host={house.host} />
                <Stars key={house.name} rate={house.rating} />
              </article>
            </main>
            <section>
              <aside>
                <Dropdown key={house.id} title='Description'>
                  {<p>{house.description}</p>}
                </Dropdown>
              </aside>
              <aside>
                <Dropdown key={house.id} title='Équipements'>
                {<ul>{house.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>}
                </Dropdown>
              </aside>
            </section>
          </>
        ))}
    </>
  )
}

export default Housing
