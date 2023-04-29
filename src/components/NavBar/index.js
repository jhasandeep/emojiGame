// Write your code here.

import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScore = () => {
    const {currentScore, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }

    return (
      <div className="score-container">
        <p className="score-label">Score: {currentScore}</p>
        <p className="score-label">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-title-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-title">Emoji Game</h1>
        </div>
        {this.renderScore()}
      </div>
    )
  }
}

export default NavBar
