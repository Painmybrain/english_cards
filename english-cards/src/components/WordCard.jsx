import React, { useState } from 'react';
import styles from './WordCard.module.css'


const WordCard = ({ id, english, transcription, russian, tags }) => {

  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_word}>{english}</div>
      <div className={styles.card_transcription}>{transcription}</div>
      <div>
        {clicked
          ? <div className={styles.card_translation}>{russian}</div>
          :
          <button
            className={styles.card_button}
            onClick={() => setClicked(true)}
          >TRANSLATE</button>
        }
      </div>
    </div>

  )
}

export default WordCard;