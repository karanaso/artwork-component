import React from 'react';
import './ButtonBell.scss';

const ButtonBell = (props) => 
  <div className="ButtonBell">
    <input 
      type="button" 
      className={(props.unAcknowledgedItems>0) ? 'ButtonBell active' : 'ButtonBell inactive'} 
      value={(props.unAcknowledgedItems>0) ? props.unAcknowledgedItems : "0"} 
    />
  </div>

export default ButtonBell;