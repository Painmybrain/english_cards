
import ButtonTableDelete from './ButtonTableDelete';
import styles from './TableRow.module.css';
import buttonStyles from './ButtonTable.module.css'
import { useState } from 'react';



const TableRow = ({ id, english, transcription, russian, tags }) => {

  const [clicked, setClicked] = useState(false);
  const [number, setNumber] = useState(id);
  const [partSpeech, setPartSpeech] = useState(tags);
  const [engWord, setEngWord] = useState(english);
  const [transcript, setTranscript] = useState(transcription);
  const [translate, setTranslate] = useState(russian);


  function getNumber(event) {
    const newNumber = event.target.value;
    setNumber(newNumber)
  }

  function getPartSpeech(event) {
    const newTags = event.target.value;
    setPartSpeech(newTags)
  }

  function getEngWord(event) {
    const newEng = event.target.value;
    setEngWord(newEng)
  }

  function getTranscript(event) {
    const newTrscr = event.target.value;
    setTranscript(newTrscr)
  }

  function getTranslate(event) {
    const newTrslt = event.target.value;
    setTranslate(newTrslt)
  }


  return (
    <tr className={styles.table_row} >
      <td>
        {clicked
          ? (
            <input
              type='text'
              onChange={getNumber}
              value={number}
            >
            </input>)
          : <div>{number}</div>
        }
      </td>
      <td>
        {clicked
          ? (<input
            type='text'
            onChange={getPartSpeech}
            value={partSpeech}
          >
          </input>)
          : <div>{partSpeech}</div>
        }
      </td>
      <td>
        {clicked
          ? (<input
            type='text'
            onChange={getEngWord}
            value={engWord}
          >
          </input>)
          : <div>{engWord}</div>
        }
      </td>
      <td>
        {clicked
          ? (<input
            type='text'
            onChange={getTranscript}
            value={transcript}
          >
          </input>)
          : <div>{transcript}</div>
        }
      </td>
      <td>
        {clicked
          ? (<input
            type='text'
            onChange={getTranslate}
          >
          </input>)
          : <div>{translate}</div>
        }
      </td>
      <td className={buttonStyles.buttons_container}>
        {clicked
          ? (
            <div className={buttonStyles.buttons_container}>
              <button className={buttonStyles.save_button} onClick={() => setClicked(false)} >SAVE</button>
              <button className={buttonStyles.cancel_button}>CANCEL</button>
            </div>
          )
          :
          (
            <div className={buttonStyles.buttons_container}>
              <button className={buttonStyles.edit_button} onClick={() => setClicked(true)}>EDIT</button>
              <ButtonTableDelete />
            </div>)
        }
      </td>
    </tr>
  )
}

export default TableRow;