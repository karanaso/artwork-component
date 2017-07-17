import ActionTypes from './ActionTypes';

const Actions = {
  acknowledged: function (id) {
    return {
      type: ActionTypes.ACKNOWLEDGED,
      id,
    }
  },
  unacknowledged: function (id) {
    return {
      type: ActionTypes.UNACKNOWLEDGED,
      id,
    }
  }
}

export default Actions;