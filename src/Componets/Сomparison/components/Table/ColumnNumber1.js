import React from 'react';

import {numbers} from '../../../Utility/Number'

export const column1 = numbers.map(function(item) {
    let number;
    if (item.number < 10) {
        number = '0' + item.number;
      } else {
        number = '' + item.number;
      }

    return <tr key={item.id}>
        <td>{number}{item.string}</td>
    </tr>;
});