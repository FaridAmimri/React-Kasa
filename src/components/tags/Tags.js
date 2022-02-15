import './Tags.scss'


function Tags({ tagList }) {
  return (
    <div className="tags">
      {tagList.map((tag) => {
        return <div className="tag">{tag}</div>
      })}
    </div>
  )
}

export default Tags
