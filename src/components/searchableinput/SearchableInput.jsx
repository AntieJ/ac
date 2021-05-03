import React, { useState } from 'react';
import ReactCountryFlag from "react-country-flag";
import ClipLoader from "react-spinners/ClipLoader";

import styles from './SearchableInput.module.scss';

const SearchableInput = ({
  placeholder,
  onSubmit,
  results,
  onClickCell,
  onTextChange,
  clearSearchQuery,
  isLoading,
  error
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

  const queryResults = () => {
    if (isLoading) {
      return (
        <div className={styles.loading}>
          <ClipLoader size={50} />
        </div> 
      )
    }

    if (error) {
      return (
        <div>No data</div>
      )
    }
    
    return (
      <ul>
        {results?.map((result) => (
          <li
            className={styles.list}
            key={result.id}
            onClick={() => onClickCell(result.id)}
          >
            <span>{result.name}, {result.sys.country}</span>
            {' '} 
            <ReactCountryFlag countryCode={result.sys.country} />
            {' '}
            <span>lat: {result.coord.lat}</span>
            {' '}
            <span>lon: {result.coord.lon}</span>
          </li>
        ))}
      </ul>
    )
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
        <div className={styles.search_suggestions}>
          <div className={styles.search_suggestions_content}>
            {queryResults()}
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchableInput;
