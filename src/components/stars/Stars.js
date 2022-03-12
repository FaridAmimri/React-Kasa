import { MdStarRate } from 'react-icons/md'
import './stars.scss'


function Stars({ rate }) {
  const stars = Array.from({ length: 5 }, () => <MdStarRate />)

  return (
    <div className="star-rating">
      {stars.map((star, index) => {
        return (
          <div key={index}>
            {
              <MdStarRate
                key={index}
                className={index < rate ? 'active-color' : 'inactive-color'}
              />
            }
          </div>
        )
      })}
    </div>
  )
}

export default Stars
