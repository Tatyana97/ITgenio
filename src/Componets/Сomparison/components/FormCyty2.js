import React from 'react';

export const FormCyty2 = props => (
  <div className='formCity_block'>
        <form onSubmit={props.getCitySecond}>
         <p className='formCity_style'> И: 
         <input type="text" name="city" placeholder="Город"/>
         </p>
       </form>
    </div>
  )