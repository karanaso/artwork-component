import ActionTypes from '../../../../../source/store/ActionTypes';

describe('ActionTypes', () => {
  test('ActionTypes.ACKNOWLEDGED should return "ACKNOWLEDGED"', () => {
    expect( ActionTypes.ACKNOWLEDGED ).toBe('ACKNOWLEDGED');
  });

  test('ActionTypes.UNACKNOWLEDGED should return "UNACKNOWLEDGED"', () => {
    expect( ActionTypes.UNACKNOWLEDGED ).toBe('UNACKNOWLEDGED');
  });
});