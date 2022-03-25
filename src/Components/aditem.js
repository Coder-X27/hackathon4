

import React from 'react';
import Proptypes from 'prop-types';


 const Aditem = (props) => {


    const { production, month, type, exports, capacity } = props;
    return (

        <div className='Aditem'>
            <div>production={production}</div>
            <div>month={month}</div>
            <div>type:{type}</div>
            <div>exports:{exports}</div>
            <div>capacity:{capacity}</div>

        </div>


    );



}
export default Aditem;

