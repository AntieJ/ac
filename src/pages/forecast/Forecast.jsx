import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch, findByIdUrl } from '../../utils/useFetch';

import Card from '../../components/card/Card';
import ReactCountryFlag from "react-country-flag";
import ClipLoader from "react-spinners/ClipLoader";

import styles from './Forecast.module.scss';

const Forecast = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const url = findByIdUrl(id);

  const { data, error, isLoading } = useFetch(url);

  if (isLoading) {
    return <ClipLoader />
  }

  if (error || !data) {
    return (
      <div>There's no data to display</div>
    )
  }

  return (
    <div className={styles.container}>
      <p 
        className={styles.button_back}
        onClick={() => navigate('/')}
      >
        Search city
      </p>
      <div className={styles.city}>
        {data.city.name}, {data.city.country} <ReactCountryFlag countryCode={data.city.country} />
      </div>
      <div className={styles.description}>Weather for the next 3 days</div>
      <div className={styles.card_area}>
        {data.list.map((w) => (
          <Card
            key={w.dt}
            dt={w.dt}
            tempMax={Math.round(w.main.temp_max)}
            tempMin={Math.round(w.main.temp_min)}
            description={w.weather[0].description}
            icon={w.weather[0].icon}
            onClick={() => console.log(w)}
          />
        ))}
      </div>
    </div>
  );
}

export default Forecast;