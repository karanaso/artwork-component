import React from 'react';
import { shallow } from 'enzyme';

import Image from '../../../../../../source/components/Image/Image';

describe('<Image/>', () => {
  it('should have one img element', () => {
    const wrapper = shallow(<Image/>);
    expect( wrapper.find('img') ).toHaveLength(1);
  });

  it('should have className="img-circle img64"', () => {
    const wrapper = shallow(<Image/>);
    expect( wrapper.find('img').prop('className') ).toEqual('img-circle img64');
  });

  it('should have src="http://noplace"', () => {
    const wrapper = shallow(<Image thumb_url={'http://noplace'}/>);
    expect( wrapper.find('img').prop('src') ).toEqual('http://noplace');
  });

});