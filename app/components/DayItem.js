import React from 'react';
import {getDate} from "../utils/helper";

export function DayItem(props) {
  const date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;

  return (
    <div onClick={props.onClick} className='day-container'>
      <img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather'/>
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}