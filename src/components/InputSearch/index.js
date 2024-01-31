import ChevronDown from '@/Icons/ChevronDown'
import Search from '@/Icons/Search'
import React from 'react'
import styles from './InputSearch.module.scss'

const InputSearch = ({ handleChange }) => {
  return (
      <div className={styles.searchContainer}>
          <div className={styles.projectContainer}>
              <div className={styles.projectTitle}>Búsqueda</div>
              <div className={styles.selectionContainer}>
                  <div className={styles.selectionBox}>
                      <div className={styles.iconContainer}>
                          <Search />
                      </div>
                      <input
                          type="text"
                          placeholder="Buscar"
                          className={styles.inputField}
                          onChange={(event) => handleChange(event.target.value)}
                      />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default InputSearch
