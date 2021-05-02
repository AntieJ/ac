import { useState, useEffect } from 'react';

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
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};
