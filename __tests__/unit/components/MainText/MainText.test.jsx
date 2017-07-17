import React from 'react';
import { shallow } from 'enzyme';

import MainText from '../../../../source/components/MainText/MainText';

describe('<MainText/>', function () {
  it('should have one div', function () {
    const wrapper = shallow(<MainText />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have className="MainText"', function () {
    const wrapper = shallow(<MainText />);
    expect(wrapper.find('div').prop('className')).toEqual('MainText');
  });

  it('should have text="hello world"', function () {
    const wrapper = shallow(<MainText text={'hello world'}/>);
    expect(wrapper.find('div').text()).toEqual('hello world');
  });

});