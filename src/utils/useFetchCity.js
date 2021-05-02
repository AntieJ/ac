import { useState, useEffect, useCallback } from 'react';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const useFetchCity = (id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null);
  
  const fetchData = useCallback(async() => {
    const url = 
      `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&cnt=24&id=${id}`;

    fetch(url)
      .then((response) => {
        if (response.status !== 200) return null;

        return response.json();
      })
      .then(setData)
      .catch(console.log)
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
};
