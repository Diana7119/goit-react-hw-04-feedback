import styles from './statistics.module.css';

export const Statistics = ({ options, total, positivePercentage }) => {
  const keys = Object.keys(options);

  return (
    <>
      <ul className={styles.text}>
        {keys.map(el => {
          return (
            <li key={el}>
              {el}: {options[el]}
            </li>
          );
        })}
      </ul>
      <p className={styles.text}>Total: {total}</p>
      <p className={styles.text}>
        Positive feedback:
        {!positivePercentage ? 0 : Math.round(positivePercentage)} %
      </p>
    </>
  );
};