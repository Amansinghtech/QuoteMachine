import React, { Component } from 'react'
import Wrapper from './Components/Wrapper'
import './components.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentQuote: '',
      currentAuthor: '',
      quotes: [],
    }
    this.chooseQuote = this.chooseQuote.bind(this)
  }

  chooseQuote() {
    const randQuote = this.state.quotes[
      Math.floor(Math.random() * this.state.quotes.length)
    ]
    this.setState({
      currentQuote: randQuote.quote,
      currentAuthor: randQuote.author,
    })
    console.log(this.state)
  }

  componentDidMount() {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.quotes)
        this.setState({
          quotes: data.quotes,
          updateQuote: this.chooseQuote
        })
      })
      .then(this.chooseQuote)
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper data={this.state} />
      </React.Fragment>
    )
  }
}

export default App
