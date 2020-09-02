import React from 'react'
import QuoteBox from './QuoteBox'

function Wrapper(props) {
  return (
    <div id="wrapper">
      <QuoteBox data = {props.data} />
  <div className="footer"> by Aman Singh</div>
    </div>
  )
}
export default Wrapper
