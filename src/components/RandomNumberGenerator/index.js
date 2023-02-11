// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNo: 0}

  onClickGenerateRandomNumber = () => {
    const Rand = Math.ceil(Math.random() * 100)
    this.setState({randomNo: Rand})
  }

  render() {
    const {randomNo} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="header">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onClickGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNo}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
