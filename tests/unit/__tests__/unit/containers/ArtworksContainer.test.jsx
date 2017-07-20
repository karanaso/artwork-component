import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ArtworksContainer from '../../../../../source/containers/ArtworksContainer';

describe('ArtworksContainer', () => {
  let container;
  let store;
  beforeEach(() => {
    store = {};
    const state = {
      "36": {
        "id": 36,
        "artwork_id": 941,
        "user_id": 10,
        "body": "Also, the address is 79/104 New Order Road not 78",
        "acknowledged": false,
        "dates": {
          "created": {
            "date_time": "13/06/2017 09:16"
          }
        },
        "user": {
          "first_name": "Frank",
          "last_name": "Greeff",
          "deleted": null,
          "email": "admin@agency.com",
          "sign_in_count": 947,
          "username": "admin@agency.com",
          "id": 10,
          "full_name": "Frank Greeff",
          "image": {
            "id": 1014,
            "user_id": 10,
            "imageable_id": 10,
            "imageable_type": "User",
            "image_type": "photo",
            "sort": null,
            "contributor_id": null,
            "provider_id": null,
            "data": null,
            "private": true,
            "size": {
              "preview": {
                "width": 900,
                "height": 900,
                "resize_ratio": 2.851111111111111
              },
              "original": {
                "width": 2566,
                "height": 2566,
                "resize_ratio": 1
              }
            },
            "original_url": "https://realhub.s3-ap-southeast-2.amazonaws.com/storage/development/images/files/000/001/014/staffphotos_%286_of_14%29_square_original.jpg?1490158017",
            "large_url": "https://realhub.s3-ap-southeast-2.amazonaws.com/storage/development/images/files/000/001/014/staffphotos_%286_of_14%29_square_preserved_1200x900.jpg?1490158017",
            "thumb_url": "https://realhub.s3-ap-southeast-2.amazonaws.com/storage/development/images/files/000/001/014/staffphotos_%286_of_14%29_square_headshot_200x200.jpg?1490158017",
            "square_url": "https://realhub.s3-ap-southeast-2.amazonaws.com/storage/development/images/files/000/001/014/staffphotos_%286_of_14%29_square_headshot_400x400.jpg?1490158017"
          }
        }
      }
    };

    store.getState = jest.fn().mockReturnValue(state);
    store.subscribe = jest.fn();
    store.dispatch = jest.fn();
    container = mount(
      <ArtworksContainer store={store} />
    );
  });

  describe('Parent Element', () => {
    test('First component should have class "artworks-component"', () => {
      expect(container.first().hasClass('artworks-component')).toBe(true);
    });
  });

  describe('First nested element should be ButtonBell', () => {
    test('something', () => {
      expect(container.first().childAt(0).name()).toEqual('ButtonBell');
    });

    test('expect acknowledgedItems attribute to be present', () => {
      expect(container.first().childAt(0).prop('acknowledgedItems')).toBeDefined()
    });

    test('expect unAcknowledgedItems attribute to be present', () => {
      expect(container.first().childAt(0).prop('unAcknowledgedItems')).toBeDefined()
    });
  });

  describe('Second nested element should be a list item', () => {
    test('left-col', () => {
      expect( container.first().childAt(1).childAt(0).hasClass('left-col') ).toBe(true);
    });

    test('right-col', () => {
      expect( container.first().childAt(1).childAt(1).hasClass('right-col') ).toBe(true);
    });
  });

});