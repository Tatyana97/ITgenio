import React from 'react';


const FormCyty1 = props => (
  <div>
    <form onSubmit={props.cityMethod}>
      <p> Между:
      <input type="text" name="city" placeholder="Город"/>
      </p>
    </form>
    </div>
  )

export default FormCyty1