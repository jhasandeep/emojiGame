// Write your code here.
import './index.css'

import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emoji, onClickEmoji} = this.props

    const {id, emojiName, emojiUrl} = emoji

    const onClickEmojiItem = () => {
      onClickEmoji(id)
    }

    return (
      <li className="emoji-item">
        <button type="button" onClick={onClickEmojiItem}>
          <img
            key={id}
            src={emojiUrl}
            alt={emojiName}
            className="emoji-image"
          />
        </button>
      </li>
    )
  }
}

export default EmojiCard
