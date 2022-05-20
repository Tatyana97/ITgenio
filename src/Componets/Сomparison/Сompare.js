import React from 'react';

import FormCompare from './formCompare'

class Сompare extends React.Component {
    constructor(props) {
        super(props);
      }
            render (){
                return (
                    <div className='compare'>
                        <h1>Конвертер времени: узнайте разницу</h1>
                         <FormCompare/>
                    </div>
                )
            }
}

export default Сompare