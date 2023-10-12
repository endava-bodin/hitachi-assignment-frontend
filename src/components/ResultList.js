import React from 'react';
import styles from './ResultList.module.css';

const ResultList = ({ results, updated }) => {

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Result List</h2>
      {updated ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <ul className={styles.list}>
            {
                results.map((result, index) => (
                    <li key={index} className={styles.item}><b>Name:</b> {result.name}, <b>Quantity:</b> {result.quantity}</li>
                ))
            }
        </ul>
      )}
    </div>
  );
}

export default ResultList;
