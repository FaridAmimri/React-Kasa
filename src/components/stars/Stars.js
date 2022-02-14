import { MdStarRate } from 'react-icons/md'
import './Stars.scss'

function Stars({ rate }) {
  const stars = Array.from({ length: 5 }, () => <MdStarRate />)

  return (
    <div className="star-rating">
      {stars.map((star, index) => {
     
        return (
          <>
            {index < rate && (
            <MdStarRate key={index} className={index < rate ? 'active-color' : 'inactive-color'} />
            )}
          </>
        )
      })}
    </div>
  )
}

export default Stars
