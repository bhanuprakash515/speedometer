// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onIncrease = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(preState => ({
        speed: preState.speed + 10,
      }))
    }
  }

  onDecrease = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(preState => ({
        speed: preState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="heading2">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn1" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button className="btn2" onClick={this.onDecrease}>
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
