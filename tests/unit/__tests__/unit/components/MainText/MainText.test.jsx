import React from 'react';
import { shallow } from 'enzyme';

import MainText from '../../../../../../source/components/MainText/MainText';

describe('<MainText/>', () => {
  it('should have one div', () => {
    const wrapper = shallow(<MainText />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have className="MainText"', () => {
    const wrapper = shallow(<MainText />);
    expect(wrapper.find('div').prop('className')).toEqual('MainText');
  });

  it('should have text="hello world"', () => {
    const wrapper = shallow(<MainText text={'hello world'}/>);
    expect(wrapper.find('div').text()).toEqual('hello world');
  });

});