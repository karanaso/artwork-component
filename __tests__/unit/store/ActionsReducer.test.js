import ActionsReducer from '../../../source/store/ActionsReducer';

describe('ActionsReducer', () => {
  test('ActionsReducer acknowledge action should return acknowledged oject', () => {
    const initialState = {
      "36": {
        id: 36,
        acknowledged: false
      },
      "37": {
        id: 37,
        acknowledged: false
      }
    };

    const expectedResult = {
      "36": {
        id: 36,
        acknowledged: true
      },
      "37": {
        id: 37,
        acknowledged: false
      }
    }

    const action = {
      type: 'ACKNOWLEDGED',
      id: 36
    };

    expect(ActionsReducer(initialState, action)).toEqual(expectedResult);
  });
});
