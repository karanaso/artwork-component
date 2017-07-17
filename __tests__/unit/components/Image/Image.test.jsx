import React from 'react';
import { shallow } from 'enzyme';

import Image from '../../../../source/components/Image/Image';

describe('<Image/>', function () {
  it('should have one img element', function () {
    const wrapper = shallow(<Image/>);
    expect( wrapper.find('img') ).toHaveLength(1);
  });

  it('should have className="img-circle img64"', function () {
    const wrapper = shallow(<Image/>);
    expect( wrapper.find('img').prop('className') ).toEqual('img-circle img64');
  });

  it('should have src="http://noplace"', function () {
    const wrapper = shallow(<Image thumb_url={'http://noplace'}/>);
    expect( wrapper.find('img').prop('src') ).toEqual('http://noplace');
  });

});