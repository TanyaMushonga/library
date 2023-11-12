import React from 'react'
import {BiSolidSearch} from 'react-icons/bi';
import styles from './inputStyles.module.css';
const Search = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.searchBox}>
          <input type="text" className={styles.input} placeholder="search...." />
          <div className={styles.button}>
            <BiSolidSearch className={styles.searchicon} />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Search