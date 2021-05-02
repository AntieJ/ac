import React from 'react';
import { DateTime } from 'luxon';

import styles from './Card.module.scss'

const Card = ({ 
  tempMax,
  tempMin,
  description,
  dt,
  icon,
  onClick,
}) => {
  const date = DateTime.fromSeconds(dt)

  return (
    <div className={styles.container}>
      <div className={styles.content} onClick={onClick}>
        <div className={styles.datetime}>
          <span>{date.toLocaleString(DateTime.DATE_MED)}</span>
          <span>{date.toLocaleString(DateTime.TIME_SIMPLE)}</span>
        </div>
        <img 
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather"
        />
        <div className={styles.degrees}>
          <span>{tempMax}°</span>
          <span>/{tempMin}°</span>
        </div>
        <div className={styles.description}>
          {description}
        </div>
        <div className={styles.something}>
          0%
        </div>
      </div>
    </div>
  )
}

export default Card;
