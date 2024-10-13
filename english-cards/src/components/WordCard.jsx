import React from 'react';
import styles from './WordCard.module.css'

const WordCard = ({ id, english, transcription, russian, tags }) => {

  return (
    <div className={styles.card_container}>
      <div className={styles.card_word}>{english}</div>
      <div className={styles.card_transcription}>{transcription}</div>
    </div>

  )
}

export default WordCard;