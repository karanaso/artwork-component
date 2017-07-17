import React from 'react';
import { shallow } from 'enzyme';

import ButtonBell from '../../../../source/components/ButtonBell/ButtonBell'

describe('<ButtonBell/>', function () {
  it('should have one div', function () {
    const wrapper = shallow(<ButtonBell/>);
    expect( wrapper.find('div') ).toHaveLength(1);
  });

  it('first nested element should be "input"', function () {
    const wrapper = shallow(<ButtonBell/>);
    expect( wrapper.find('div').children().first().name() ).toEqual('input')
  });

  it('should have only one input ', function () {
    const wrapper = shallow(<ButtonBell/>);
    expect( wrapper.find('input') ).toHaveLength(1);
  });

  it('should have a class of "ButtonBell inactive" because there are no props', function () {
    const wrapper = shallow(<ButtonBell/>);
    expect( wrapper.find('input').hasClass('ButtonBell inactive') ).toBe(true)
  });

  it('should have a class of "ButtonBell inactive" because unAcknowledgedItems are 0', function () {
    const wrapper = shallow(<ButtonBell unAcknowledgedItems={0}/>);
    expect( wrapper.find('input').hasClass('ButtonBell inactive') ).toBe(true)
  });

  it('should have a class of "ButtonBell active" because unAcknowledgedItems are greate than 0', function () {
    const wrapper = shallow(<ButtonBell unAcknowledgedItems={1}/>);
    expect( wrapper.find('input').hasClass('ButtonBell active') ).toBe(true)
  });

});