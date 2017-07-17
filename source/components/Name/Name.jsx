import React from 'react';
import './Name.scss';

const Name = (props) => 
  <div className="name">{props.first_name} {props.last_name}</div>

export default Name;