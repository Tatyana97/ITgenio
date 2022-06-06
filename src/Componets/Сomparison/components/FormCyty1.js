import React from 'react';

export const FormCyty1 = props => (
  <div className='formCity_block'>
    <form onSubmit={props.cityMethod}>
      <p className='formCity_style'> Между:
      <input type="text" name="city" placeholder="Город"/>
      </p>
    </form>
    </div>
  )