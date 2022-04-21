import React from 'react';

import './error.css'


export const Error = props =>(
    <div>
        <p className='error'>{props.err}</p>
    </div>
)