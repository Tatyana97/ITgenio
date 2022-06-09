import React from 'react';

import {numbers} from '../../../Utility/Number'
import {column1, checkCondition} from '../../index'
import './TableCityStyle.css'

export function TableCity(props) {
	let time1,time2;
	function difference(city1, city2) {
		let Stringtime1 = String(city1);
		 time1 = +(Stringtime1.split(":")[0]);

		let Stringtime2 = String(city2);
		 time2 = +(Stringtime2.split(":")[0]);
			
		let result = Math.abs(time1 - time2);

		return result
	}
	let	gmt = difference(props.city1, props.city2)


	let massivNumberForTableColumn2 =[];
	function newMassiv() {
		numbers.map(item =>{
			if (time1<time2) {
				massivNumberForTableColumn2.push(item.number + gmt)
			} else{
				massivNumberForTableColumn2.push(item.number - gmt)
			}
		})
	}
	newMassiv()


	const column2 = massivNumberForTableColumn2.map(function(item) {

		let numberFromColumn2;

		if (item < 10) {
            numberFromColumn2 = '0' + item;
          } else {
            numberFromColumn2 = '' + item;
          }

		  if (checkCondition (numberFromColumn2)) {
			numberFromColumn2 = checkCondition (numberFromColumn2)
		  } 
		  
		return <tr>
			<td>{numberFromColumn2}{':00'}</td>
		</tr>;
	});
	


	return <table className='table'>

		<tbody>
			{column1}
		</tbody>

		<tbody>
			{column2}
		</tbody>

	</table>
		}
