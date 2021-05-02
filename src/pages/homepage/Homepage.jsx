import React, { useEffect, useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';

import SearchableInput from '../../components/searchableinput/SearchableInput';

import styles from './Homepage.module.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);
  const [queryString, setQueryString] = useState('');

  const handleOnSubmit = (text) => navigate(text);

  const fetchData = useCallback(async () => {
    const url = `http://api.openweathermap.org/data/2.5/find?q=${queryString}&APPID=b70737776bd3ea36b08580bdf70dc26d`
  
    await fetch(url)
        .then((response) => {
          console.log(response)
          if (response.status === 200 )
            return response.json()
          
          throw new Error('erro')
        })
        .then((data) => setCities(data.list))
        .catch(console.error)
  }, [queryString]);

  useEffect(() => {
    if (queryString !== '') {
      fetchData();
    }
  }, [queryString])

  const handleTextChange = (text) => {
    setQueryString(text)
  }

  const handleOnClickCell = (id) => navigate(`/city/${id}`);

  return (
    <div>
      <div>
        Weather Forecast
      </div>
      <SearchableInput
        placeholder='Enter a city'
        onTextChange={handleTextChange}
        results={cities}
        onSubmit={handleOnSubmit}
        onClickCell={handleOnClickCell}
        clearSearchQuery={() => setCities('')}
      />
    </div>
  );
}

export default HomePage;
