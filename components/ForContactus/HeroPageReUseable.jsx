import styles from './HeroPageReUseable.module.css';

function HeroPageReUseable({ text }) {
  return (
    <div className={`${styles.mainDiv} flex justify-center items-center`}>
      <h1 className={styles.heroText}> {text} </h1>
    </div>
  );
}
export default HeroPageReUseable;
