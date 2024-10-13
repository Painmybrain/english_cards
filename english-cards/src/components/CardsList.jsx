import data from "./data";
import WordCard from "./WordCard";
import styles from './CardList.module.css'

function CardList() {
  return (
    <div className={styles.card_list_container}>
      {data.map((cards) => {
        return <WordCard key={cards.id} {...cards} />;
      })}
    </div>
  );
}

export default CardList;