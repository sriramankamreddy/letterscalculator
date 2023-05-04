// Write your code here.

// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInputEl: ''}

  onCount = event => {
    this.setState({searchInputEl: event.target.value})
  }

  render() {
    const {searchInputEl} = this.state

    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="input"
            className="inputClass"
            onChange={this.onCount}
            placeholder="Enter the phrase"
            id="phraseText"
            value={searchInputEl}
          />
          <div className="extra">
            <p className="para2">No.of letters: {searchInputEl.length}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="imageSize"
        />
      </div>
    )
  }
}

export default LettersCalculator
