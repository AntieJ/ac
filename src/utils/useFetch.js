import { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async() => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error)
      }
    }

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export const findByIdUrl = (id) => `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&cnt=24&units=metric&id=${id}`;
export const queryUrl = (query) => `http://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}`;
