import React from 'react';


export const Weather = props => (
    <div className="infoWeath">
    { props.city &&
      <div className='formInfa'>
        <div className='point'>
          <div class="circle"><div className='place'></div></div>
            <p className='townAndTime'> Местоположение:
               <p className='townAndTimePoint'>{props.city}, {props.country}</p>
            </p>
         </div>
         <div className='point'>
         <div class="circle"><div className='time'></div></div>
           <p className='townAndTime'> Время:
              <p className='townAndTimePoint'>{props.time}</p>
              </p>
          <div/>
         </div>
      </div>
    }
     </div>
  );