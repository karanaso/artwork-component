import React from 'react';
import { shallow } from 'enzyme';
import MarkAsSeen from '../../../../../../source/components/MarkAsSeen/MarkAsSeen';

describe('<MarkAsSeen/>', () => {
    let myFunc;

  beforeEach( () => {
    myFunc = jest.fn().mockReturnValue([]);
  })
  it('should have one a tag', () => {
    const wrapper = shallow(<MarkAsSeen MarkAsSeen={myFunc}/>);
    expect( wrapper.find('a') ).toHaveLength(1);
  });

  it('should have a class of "MarkAsSeen inactive" because acknowledged is false', () => {
    const wrapper = shallow(<MarkAsSeen markAsSeen={myFunc} acknowledged={false}/>);
    expect( wrapper.find('a').hasClass('MarkAsSeen active') ).toBe(true);
  });

  it('should have a class of "MarkAsSeen active" because acknowledged is true', () => {
    const wrapper = shallow(<MarkAsSeen markAsSeen={myFunc} acknowledged={true}/>);
    expect( wrapper.find('a').hasClass('MarkAsSeen inactive') ).toBe(true);
  });

  it('should simulate the click', () => {
    const wrapper = shallow(<MarkAsSeen markAsSeen={myFunc} acknowledged={false}/>);
    wrapper.find('a').simulate('click');
    expect(myFunc).toHaveBeenCalled();
  });
});