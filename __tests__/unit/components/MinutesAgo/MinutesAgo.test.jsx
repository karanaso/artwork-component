import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import MinutesAgo from '../../../../source/components/MinutesAgo/MinutesAgo';

describe('<MinutesAgo/>', function () {
  it('should have one div element', function () {
    const wrapper = shallow(<MinutesAgo />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have classMinutesAgo="MinutesAgo"', function () {
    const wrapper = shallow(<MinutesAgo />);
    expect(wrapper.find('div').prop('className')).toEqual('MinutesAgo');
  });

  it('should have text="hello world"', function () {
    const time = moment().subtract(5,'minutes').add(10,'seconds').format('DD/MM/YYYY hh:mm')

    const expectResult = '5 minutes ago';
    const wrapper = shallow(<MinutesAgo created={time}/>);
    expect(wrapper.find('div').text()).toEqual(expectResult);
  });

});