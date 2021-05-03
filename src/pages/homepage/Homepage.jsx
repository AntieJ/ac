import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch, queryUrl } from '../../utils/useFetch';

import SearchableInput from '../../components/searchableinput/SearchableInput';

import styles from './Homepage.module.scss';

const HomePage = () => {
  const [queryString, setQueryString] = useState('');
  const navigate = useNavigate();
  const url = queryUrl(queryString);
  const { data, isLoading, error } = useFetch(url);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Weather Forecast
      </div>
      <SearchableInput
        placeholder='Enter a city'
        onTextChange={setQueryString}
        results={data?.list}
        onSubmit={null}
        onClickCell={(id) => navigate(`/city/${id}`)}
        clearSearchQuery={() => setQueryString('')}
        isLoading={isLoading}
        error={error}
      />
      <div className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
        including versions of Lorem Ipsum.
      </div>
    </div>
  );
}

export default HomePage;
