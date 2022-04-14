/* eslint-disable no-undef */
import '../../App.css';
import './Main.css';
import React from 'react';
import Info from './info';
import Form from './form';
import Weather from './weather';
import Day from './day';
import Clock from './clock';
import Quote from './Quote';
import BackgroundImage from "./backgroundImage";
import {Error} from './shared/error'


const API = 'c8f5eb93ed979b6bec735e0bf7355bdc';

class MainPage extends React.Component {

	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		time: undefined,
		error: undefined
	  }

	  gettingWeather = async (e) => {
		e.preventDefault();
		let city = e.target.elements.city.value;

		try {
			if(city) {
				const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
				const data = await api_url.json();
	
	  
				let sunset = data.sys.sunset;
				console.log(sunset)
				let datess = new Date(sunset*1000);
				let sunset_date = datess.getHours() + ":" + datess.getMinutes() + ":" + datess.getSeconds();
	  
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
			  //   console.log(time);
	  
	  
				this.setState({
				  temp: data.main.temp,
				  city: data.name,
				  country: data.sys.country,
				  time: time,
				  error: undefined
				});

			//   } else {
			// 	this.setState({
			// 	  temp: undefined,
			// 	  city: undefined,
			// 	  country: undefined,
			// 	  time:undefined,
			// 	  error: "Введите название города"
			// 	});
			  }	
		} catch (err) {
			this.setState({
			 error: "Не найден город",
			 time:undefined,
			 country: undefined,
			 temp: undefined,
			 city: undefined
			})
			console.log(err);
			console.log("fdfd");
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
					//   error={this.state.error}
					/>
				  </div>
				</div>
				<Quote/>
			  </div>
			</div>
		  </div>
		);
	  }
  }

export default MainPage