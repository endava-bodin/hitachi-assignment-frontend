import React, { useState } from 'react';
import axios from 'axios';
import styles from './PostForm.module.css';

const PostForm = ({ setUpdated }) => {
  const [assetName, setAssetName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAssetNameChange = (e) => {
    setAssetName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const val = Number(e.target.value)
    setQuantity(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/api/assets/save?assetName=${assetName}&quantity=${quantity}`)
      .then((response) => {
        console.log('POST request successful', response.data);
        setUpdated(true);
        setAssetName('');
        setQuantity('');
      })
      .catch((error) => {
        console.error('Error making POST request', error);
      });
  };

  return (
    <div className={styles.form}>
      <h2>Post Data</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="assetName" className={styles.label}>Asset Name:</label>
          <input
            type="text"
            id="assetName"
            value={assetName}
            onChange={handleAssetNameChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="quantity" className={styles.label}>Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
