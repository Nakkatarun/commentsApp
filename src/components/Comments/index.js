import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="comments-heading">Comments</h1>
        <div className="comments-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-img"
          />
          <div className="write-comment-container">
            <p className="description">Say something about 4.0 Technologies</p>
            <textarea>
              <input
                className="input-name"
                type="text"
                placeholder="Your Name"
              />
              <textarea className="text-comment" placeholder="Your Comment">
                .
              </textarea>

              <button type="submit" className="button">
                Add Comment
              </button>
            </textarea>
          </div>
        </div>
        <div className="display-comments-container">
          <div className="count-container">
            <p className="comments-count">0</p>
            <p className="comments">comment</p>
          </div>
          <div className="comment-details">
            {initialContainerBackgroundClassNames.map(eachClassName => (
              <CommentItem className={eachClassName} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
