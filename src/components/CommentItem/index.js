// Write your code here
import './index.css'

const CommentItem = props => {
  const {className} = props

  return (
    <li className="list-comments">
      <div className="user-details-container">
        <div className="user-name-container">
          <p className={`user-letter ${className}`}>R</p>
          <p className="user-name">Tarun Nakka</p>
          <p className="time">20 min ago</p>
        </div>
        <p className="comment">a wonderfull journey!</p>
        <div className="favorite-container">
          <div className="like-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="like-img"
            />
            <p className="like">Like</p>
          </div>
          <button type="button" className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
