import React from 'react';

import '../styles/form.css'

export const Form = props => (
    <form className='formTown' onSubmit={props.weatherMethod}>
      <input type="text" name="city" placeholder="Город"/>
      <button className='bott'>Получить информацию</button>
    </form>
  )