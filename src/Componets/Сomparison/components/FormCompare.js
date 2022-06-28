import React from 'react';

import {FormCyty1, FormCyty2, TableCity} from '../index';
import {getTimeCity} from '../../Utility/getTimeCity'
import './compare.css'

export class FormCompare extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oneCity: null,
            secondCity: null,
            error: null,
          }
      }

	  toggle() {
		this.setState({addClass: !this.state.addClass});
	  }

      getCity = async (e) => {
		e.preventDefault();
		let city = e.target.elements.city.value;
		let time = await getTimeCity(city);


			if (time) {
				this.setState({
				  oneCity: time,
				  error: null
				});
			  }	else{
				this.setState({
				 error: 'Не найден город',
				 oneCity: null,
				})
			  }
			}


			componentDidMount() {
				if (this.state.oneCity != null) {
					setInterval(() => this.tick(), 1000)
				}
			  }
			  componentDidUpdate() {
				setInterval(() => this.tick(), 1000)
			  }

			  tick() {
			
			  }


			getCitySecond = async (e) => {
				e.preventDefault();
				let city = e.target.elements.city.value;
				
		
				let time = await getTimeCity(city);
					if (time) {
						this.setState({
						  secondCity: time,
						  error: null
						});
					  }	else{
						this.setState({
						 error: 'Не найден город',
						 secondCity: null,
						})
					  }
					}

	  

    
				
            render (){
				console.log(this.state.oneCity)
				console.log(this.state.secondCity)
                return (
                    <div className='compareCity'>
                      <div className='form'>
							
							   <div className='form_city'>
                                	<FormCyty1 cityMethod={this.getCity} />
									{this.state.oneCity != "aN:aN" ?
									<p>{this.state.oneCity}</p>:
									<p>Не найден город</p>
								}
								</div>
								<div className='form_city'>
									<FormCyty2 getCitySecond={this.getCitySecond} />
									{this.state.secondCity != "aN:aN" ?
									<p>{this.state.secondCity}</p>:
									<p>Не найден город</p>
								}
								</div>
                        </div>
						{this.state.oneCity != "aN:aN" && this.state.oneCity != null && this.state.secondCity != "aN:aN" && this.state.secondCity != null? 
							<TableCity
							city1={this.state.oneCity}
							city2={this.state.secondCity}
						/> 
						: null
						}
					
                    </div>
                )
            }
		}