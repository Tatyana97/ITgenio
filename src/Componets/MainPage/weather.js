import React from 'react';


const Weather = props => (
    <div className="infoWeath">
    { props.city &&
      <div>
        <p>Местоположение: {props.city}, {props.country}</p>
        <div>Время: {props.time}</div>
      </div>
    }
    </div>
  );
  
export default Weather;