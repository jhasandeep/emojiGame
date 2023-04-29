// Write your code here.

import './index.css'

import {Component} from 'react'

const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

class WinOrLoseCard extends Component {
  render() {
    const {isWon, onClickPlayAgain, score} = this.props
    const imageUrl = isWon ? winImage : loseImage

    const altText = isWon ? 'win' : 'lose'

    const gameStatus = isWon ? 'You Won' : 'You Lose'

    const scoreLabel = isWon ? 'Best Score' : 'Score'

    return (
      <div className="winOrLose-container">
        <div className="winOrLose-text-container">
          <h1 className="winOrLose-status">{gameStatus}</h1>
          <p className="winOrLose-label">{scoreLabel}</p>

          <p className="winOrLose-current-score">{score}/12</p>
          <button
            type="button"
            className="winOrLose-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <div className="winOrLose-image-container">
          <img className="win-or-lose-image" src={imageUrl} alt={altText} />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
