import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummery', () => {
  it('should render correct href', () => {
    const expectedHref = '/trip/abc';
    const component = shallow(
      <TripSummary id='abc' tags={['pool', 'beach']} />
    );

    expect(component.find('Link').prop('to')).toEqual(expectedHref);
    console.log(component.debug());
  });

  it('should render correct img', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'travel';
    const component = shallow(
      <TripSummary
        id='abc'
        tags={['pool', 'beach']}
        image='image.jpg'
        name='travel'
      />
    );

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });

  it('should render without crashing', () => {
    const component = shallow(
      <TripSummary
        name='travel'
        cost='$2000'
        days={3}
        tags={['pool', 'beach']}
      />
    );
    expect(component).toBeTruthy();
  });

  it('should throw error without props id, image, name, cost, days', () => {
    expect(() => shallow(<TripSummary tags={['pool', 'beach']} />)).toThrow();
  });

  it('should render correct tags', () => {
    const expectedTags = ['pool', 'spa', 'beach'];
    const component = shallow(
      <TripSummary
        name='travel'
        cost='$2000'
        days={3}
        tags={expectedTags}
      />
    );

    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render div without tags', () => {
    const component = shallow(
      <TripSummary 
        name='travel' 
        cost='$2000' 
        days={3} />
    );
    expect(component.hasClass('tag')).toBe(false);
  });
});
