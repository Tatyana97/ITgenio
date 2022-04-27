import React from 'react';

import {API} from '../MainPage/service/index'
import FormCyty1 from './FormCyty1'
import FormCyty2 from './FormCyty2'
import {Error} from '../MainPage/shared/error'


class FormCompare extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: null,
            secondCity: null,
            error: null
          }
      }

      gettingCity = async (e) => {
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
				const time = hours.substr(-2) + ':' + minutes.substr(-2);	  
	  
	  
				this.setState({
				  city: time,
				  error: null
				});
			  }	
		} catch (err) {
			let errorText = "Не найден город";
			this.setState({
			 error: errorText,
             city: null,
			})
		}
	  }

	  gettingCitySecond = async (e) => {
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
				const time = hours.substr(-2) + ':' + minutes.substr(-2);	  
	  
	  
				this.setState({
				  secondCity: time,
				  error: null
				});
			  }	
		} catch (err) {
			let errorText = "Не найден город";
            
			this.setState({
			 error: errorText,
             secondCity:null,
			})
		}
	  }

    

            render (){
                return (
                    <div className='compare'>
                        <h2>Какая разница во времени</h2>
                            <div>
                               {this.state.error? <Error err ={this.state.error}/>: null}
                                <FormCyty1 cityMethod={this.gettingCity} />
                                {this.state.city}
								<FormCyty2 cityMethod={this.gettingCitySecond} />
                                {this.state.secondCity}
                        </div>
                    </div>
                )
            }
}

export default FormCompare