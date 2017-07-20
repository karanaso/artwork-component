import Actions from '../../../../../source/store/Actions';

describe('Actions', () => {
  test('Actions.acknowledged should proper oject', () => {
    const expectedResult = {
      type: 'ACKNOWLEDGED',
      id: 36
    };

    expect( Actions.acknowledged(36) ).toEqual( expectedResult );
  });

  test('Actions.unacknowledged should proper oject', () => {
    const expectedResult = {
      type: 'UNACKNOWLEDGED',
      id: 36
    };

    expect( Actions.unacknowledged(36) ).toEqual( expectedResult );
  });
});
