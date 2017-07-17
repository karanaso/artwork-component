import React from 'react';
import moment from 'moment';
import './MinutesAgo.scss';

const MinutesAgo = (props) =>
  <div className="MinutesAgo">{moment(props.created, "DD/MM/YYYY hh:mm", 'en-gb', true).fromNow() }</div>

export default MinutesAgo;