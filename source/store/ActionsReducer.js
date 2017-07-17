import Actions from './Actions';
import data from '../../data/comment_data.json';
import _ from 'lodash';

let initialState = {};
for(let item of data) {
  initialState[ item.id ] = item;
}
// initialState = _.sortBy(initialState,(item) => item.dates.created.date_time);

const ActionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ACKNOWLEDGED':
      let newState = _.cloneDeep( state );
      newState[ action.id ].acknowledged = true;
      return newState;
    default:
      return state;
  }
}

export default ActionsReducer;