import React from 'react';

const Weather = props => (
    <div className="infoWeath">
    { props.city &&
      <div>
        <p>Местоположение: {props.city}, {props.country}</p>
        <div>Время: {props.time}</div>
      </div>
    }
    <p className="error">{ props.error }</p>
    </div>
  );
  
export default Weather;