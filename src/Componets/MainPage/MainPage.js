/* eslint-disable no-undef */
import React from 'react';

import {Info, Form, Weather, Day, Clock, Quote, BackgroundImage} from './index'
import {Error} from './shared/error'
import '../../App.css';
import './Main.css';
import {API} from './service/index'

export class MainPage extends React.Component {

	state = {
		temp: null,
		city: null,
		country: null,
		time: null,
		error: null
	  }

	  gettingWeather = async (e) => {
		e.preventDefault();
		let city = e.target.elements.city.value;

		try {
			if(city) {
				const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
				const data = await api_url.json();
	
	    
				//time
				let timezone = data.timezone;
				const dates = new Date()
				const localTime = dates.getTime()
				const localOffset = dates.getTimezoneOffset() * 60000
				const utc = localTime + localOffset
				const citys = utc + (1000 * timezone)
				const times = new Date(citys)
				const hours = "0"+ times.getHours();
				const minutes = "0" + times.getMinutes();
				const seconds = "0" + times.getSeconds();
				
				const time = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);	  
				

				this.setState({
				  temp: data.main.temp,
				  city: data.name,
				  country: data.sys.country,
				  time: time,
				  error: null
				});
			  }	
		} catch (err) {
			let errorText = "Не найден город";
			this.setState({
			 error: errorText,
			 time: null,
			 country: null,
			 temp: null,
			 city: null
			})
		}
	  }

	
	  render() {
		return (
		  <div className="wrapper">
			<div className="main">	
			  <div className="container">
			  <div className='cow-sm-7'> 
			  <BackgroundImage/>
			  <Day />
			  <Clock/>
			  </div>
				<div className="row">
				  <div className="row-sm-5 info">
					<Info />
				  </div>
				  <div className="row-sm-7 form">
					{this.state.error? <Error err ={this.state.error}/>: null}
					<Form weatherMethod={this.gettingWeather} />
					<Weather
					  temp={this.state.temp}
					  city={this.state.city}
					  country={this.state.country}
					  time = {this.state.time}
					/>
				  </div>
				</div>
			  </div>
			</div>
			<Quote/>
		  </div>
		);
	  }
  }