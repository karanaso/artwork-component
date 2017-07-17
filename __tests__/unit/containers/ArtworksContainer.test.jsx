import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ArtworksContainer from '../../../source/containers/ArtworksContainer';

describe('ArtworksContainer', () => {
  let container;
  let store;
  beforeEach(() => {
    store = {};
    store.getState = jest.fn().mockReturnValue([]);
    store.subscribe = jest.fn();
    store.dispatch = jest.fn();
    container = mount(
        <ArtworksContainer store={store}/>
    );
  });

  describe('Parent Element', () => {
    test('First component should have class "artworks-component"', () => {
      expect( container.first().hasClass('artworks-component')).toBe(true);
    });
  });

  describe('First nested element should be ButtonBell', () => {
    test('something', () => {
      expect( container.first().childAt(0).name() ).toEqual('ButtonBell');
    });

    test('expect acknowledgedItems attribute to be present', () => {
      expect( container.first().childAt(0).prop('acknowledgedItems')).toBeDefined()
    });

    test('expect unAcknowledgedItems attribute to be present', () => {
      expect( container.first().childAt(0).prop('unAcknowledgedItems')).toBeDefined()
    });
  });

});