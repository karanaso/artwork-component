import React from 'react';

import './MarkAsSeen.scss';

const MarkAsSeen = (props) =>
<a
  onClick={props.markAsSeen}
  className={props.acknowledged === true ? "MarkAsSeen inactive" : "MarkAsSeen active"}>
  | Mark as seen
</a>

export default MarkAsSeen;