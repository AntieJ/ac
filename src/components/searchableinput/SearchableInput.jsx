import React, { useState, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import ReactCountryFlag from "react-country-flag";

import styles from './SearchableInput.module.scss';

const SearchableInput = ({
  placeholder,
  onSubmit,
  results,
  onClickCell,
  onTextChange,
  clearSearchQuery
}) => {
  const [value, setValue] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (value === '') return;

    return onSubmit(value)
  }

  const handleChange = (e) => {
    onTextChange(e.target.value)
    setValue(e.target.value)
  }

  const clearQueryString = () => {
    setValue('');
    clearSearchQuery();
  }

  return (
    <div className={styles.search_container}>
      <form
        className={styles.search_form}
        onSubmit={handleOnSubmit}
      >
        <input
          className={styles.search_input}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <input
          className={styles.search_button}
          type='submit'
          value=''
        />  
        <input
          className={styles.search_clear}
          type='button'
          value="X"
          onClick={clearQueryString}
        />
        {results?.length > 0 && (
          <div className={styles.search_suggestions}>
            <div className={styles.search_suggestions_content}>
              <ul>
                {results.map((result) => (
                    <li
                      key={result.id}
                      onClick={() => onClickCell(result.id)}
                    >
                      {result.name},
                      {' '}
                      {result.sys.country}
                      {' '} 
                      <ReactCountryFlag countryCode={result.sys.country} />
                      {' '}
                      {result.coord.lat} {result.coord.lon}
                    </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchableInput;
