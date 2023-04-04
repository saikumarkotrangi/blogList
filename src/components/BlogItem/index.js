// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {key, eachObject} = props
  const {title, description, publishedDate} = eachObject

  return (
    <>
      <li key={key} className="list-item-container">
        <div className="name-and-date-container">
          <h1>{title}</h1>
          <p>{publishedDate}</p>
        </div>

        <p className="description-para">{description}</p>
      </li>
    </>
  )
}
export default BlogItem
