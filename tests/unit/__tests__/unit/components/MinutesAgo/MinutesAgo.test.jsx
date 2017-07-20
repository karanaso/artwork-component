import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import MinutesAgo from '../../../../../../source/components/MinutesAgo/MinutesAgo';

describe('<MinutesAgo/>',  () => {
  it('should have one div element', () => {
    const wrapper = shallow(<MinutesAgo />);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have classMinutesAgo="MinutesAgo"', () => {
    const wrapper = shallow(<MinutesAgo />);
    expect(wrapper.find('div').prop('className')).toEqual('MinutesAgo');
  });

  it('should have text="5 minutes ago"', () => {
    const time = moment().subtract(5,'minutes').format('DD/MM/YYYY HH:mm');
    console.log(time);
    const expectResult = '5 minutes ago';
    const wrapper = shallow(<MinutesAgo created={time}/>);
    expect(wrapper.find('div').text()).toEqual(expectResult);
  });
});