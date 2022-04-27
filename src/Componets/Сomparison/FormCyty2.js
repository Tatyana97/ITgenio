import React from 'react';


const FormCyty2 = props => (
  <div>
        <form onSubmit={props.gettingCitySecond}>
         <p> И: 
         <input type="text" name="city" placeholder="Город"/>
         </p>
       </form>
    </div>
  )

export default FormCyty2