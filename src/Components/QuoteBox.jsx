import React from 'react'
import Author from './Author'
import { ReactComponent as QuoteIcon } from '../images/quote.svg'
import { ReactComponent as TwitterIcon } from '../images/twitter.svg'
import { ReactComponent as TumblrIcon } from '../images/tumblr.svg'

function QuoteBox(props) {
  const twitterUrl =
    'https://twitter.com/intent/tweet?hashtags=quotes&text=' +
    encodeURIComponent(
      '"' + props.data.currentQuote + '" ' + props.data.currentAuthor,
    )

  const tumblrUrl =
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' +
    encodeURIComponent(props.data.currentAuthor) +
    '&content=' +
    encodeURIComponent(props.data.currentQuote) +
    '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  return (
    <div id="quote-box">
      <div className="quote-text">
        <QuoteIcon />
        <span id="text"> {props.data.currentQuote}</span>
      </div>
      <Author data={props.data} />
      <div className="buttons">
        <a
          className="button"
          id="tweet-quote"
          title="Tweet this quote!"
          href={twitterUrl}
        >
          <TwitterIcon />
        </a>
        <a
          className="button"
          id="tumblr-quote"
          title="Post this quote on tumblr!"
          href={tumblrUrl}
        >
          <TumblrIcon />
        </a>
        <button
          className="button"
          onClick={props.data.updateQuote}
          id="new-quote"
        >
          New quote
        </button>
      </div>
    </div>
  )
}

export default QuoteBox
