import React from 'react'

function Author(props) {
  return (
    <div className="quote-author">
        - <span id="author">{props.data.currentAuthor}</span>
      </div>
  )
}

export default Author
