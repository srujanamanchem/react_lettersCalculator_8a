import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    textInputLength: 0,
  }

  onChangeTextInput = event => {
    const textInput = event.target.value
    this.setState({textInputLength: textInput.length})
  }

  render() {
    const {textInputLength} = this.state
    return (
      <div className="app-container">
        <div className="cal-container">
          <div className="letters-calculator">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <label className="phrase-text" htmlFor="enterPhrase">
              Enter the phrase
            </label>
            <input
              type="text"
              className="text-input"
              placeholder="Enter the phrase"
              onChange={this.onChangeTextInput}
              id="enterPhrase"
            />
            <p className="count-text">No.of letters: {textInputLength}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
