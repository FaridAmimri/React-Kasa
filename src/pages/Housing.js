/** @format */

import { useParams, Navigate } from 'react-router-dom'
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

  if(filterLocation.length === 0) {
    // return <div>Pas de location</div>
    return <Navigate to='/*' />
  }

  return (
    <>
      {props.data
        .filter((house) => house.id === id)

        .map((house, idx) => (
          <div key={idx}>
            <Carousel  imgList={house.pictures} />
            <main>
              <article>
                <Locality house={house} />
                <Tags tagList={house.tags} />
              </article>
              <article>
                <Host  host={house.host} />
                <Stars rate={house.rating} />
              </article>
            </main>
            <section>
              <aside>
                <Dropdown  title='Description'>
                  {<p>{house.description}</p>}
                </Dropdown>
              </aside>
              <aside>
                <Dropdown title='Équipements'>
                {<ul>{house.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>}
                </Dropdown>
              </aside>
            </section>
          </div>
        ))}
    </>
  )
}

export default Housing
