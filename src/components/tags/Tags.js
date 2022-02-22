import './Tags.scss'


function Tags({ tagList }) {
  return (
    <div className="tags">
      {tagList.map((tag, idx) => {
        return <div className="tag" key={idx}>{tag}</div>
      })}
    </div>
  )
}

export default Tags
