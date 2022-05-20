import React from 'react';

import FormCyty1 from './FormCyty1'
import FormCyty2 from './FormCyty2'
// import {Error} from '../MainPage/shared/error'
import {getTimeCity} from '../Utility/getTimeCity'
import './compare.css'
import TableCity from './Table/TableCity'

class FormCompare extends React.Component {
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
				// console.log('fdfdf');
				if (this.state.oneCity != null) {
					console.log('fdfdf');
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
					//typeof(time.split(':')[0]) === 'number'
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
                return (
                    <div className='compareCity'>
                      <div className='form'>
                               {/* {this.state.error? <Error err ={this.state.error}/>: null} */}

								
							   <div className='form_city'>
                                	<FormCyty1 cityMethod={this.getCity} />
									<p>{this.state.oneCity}</p>
								</div>
								<div className='form_city'>
									<FormCyty2 getCitySecond={this.getCitySecond} />
                               	<p>{this.state.secondCity}</p> 
								</div>
                        </div>
						{this.state.oneCity && this.state.secondCity ? 
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

export default FormCompare