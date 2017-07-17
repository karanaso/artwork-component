import React from 'react';
import './Image.scss';

const Image = (props) => 
  <img className="img-circle img64" src={props.thumb_url} />

export default Image;