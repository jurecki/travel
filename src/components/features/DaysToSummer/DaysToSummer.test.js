import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const mockProps = {
  titleSummer: 'days to Summer',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    
    return this;
  }
  static now() {
    return (new Date(customDate));
  }
};

const checkDescriptionAtTime = (date, expectedDescription) => {
  it (`should show correct at ${date}T12:00:00.135Z`,() => {
    global.Date = mockDate(`${date}`);
  
    const component = shallow (<DaysToSummer {...mockProps} />);
    const renderedTime = component.find('.numberOfDays').text();
    expect (renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};
  
describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtTime('2020-02-11', '130');
  checkDescriptionAtTime('2020-12-30', '173');
  checkDescriptionAtTime('2020-06-30', '');
});