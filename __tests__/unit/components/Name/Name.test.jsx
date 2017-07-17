import React from 'react';
import { shallow } from 'enzyme';

import Name from '../../../../source/components/Name/Name';

describe('<Name/>', function () {
  it('should have one div element', function () {
    const wrapper = shallow(<Name />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have className="name"', function () {
    const wrapper = shallow(<Name />);
    expect(wrapper.find('div').prop('className')).toEqual('name');
  });

  it('should have text="hello world"', function () {
    const first_name = 'Sotirios';
    const last_name = 'Karanasios';
    const wrapper = shallow(<Name first_name={first_name} last_name={last_name}/>);
    expect(wrapper.find('div').text()).toEqual(first_name+' '+last_name);
  });

});