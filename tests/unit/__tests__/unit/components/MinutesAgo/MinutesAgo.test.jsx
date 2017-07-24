import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import timekeeper from 'timekeeper';

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

    timekeeper.freeze(moment().toISOString());
    const now = moment();

    const fiveMinutesAgo = now.subtract(5,'minutes').format('DD/MM/YYYY HH:mm');
    const expectResult = '5 minutes ago';

    const wrapper = shallow(<MinutesAgo created={fiveMinutesAgo}/>);
    expect(wrapper.find('div').text()).toEqual(expectResult);
  });
});