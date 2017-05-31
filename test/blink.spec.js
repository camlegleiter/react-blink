import React from 'react';
import { shallow } from 'enzyme';

import Blink from '../src/blink';

jest.useFakeTimers();

describe('<Blink />', () => {
  const text = 'hello world';
  const props = {
    rate: 1000,
    className: 'custom-class',
  };

  let component;

  beforeEach(() => {
    component = shallow(<Blink {...props}>{text}</Blink>);
  });

  it('renders its children for blinking', () => {
    expect(component.children().text()).toEqual(text);
  });

  it('displays the component by default', () => {
    expect(component.state('isVisible')).toEqual(true);
    expect(component.find('span').prop('style')).toEqual({ visibility: 'visible' });
  });

  describe('hiding the Blink component', () => {
    it('makes the component invisible after [props] rate', () => {
      expect(component.state('isVisible')).toEqual(true);

      component.instance().animate();

      jest.runOnlyPendingTimers();
      expect(setInterval.mock.calls[0][1]).toEqual(props.rate);

      expect(component.state('isVisible')).toEqual(false);
      expect(component.find('span').prop('style')).toEqual({ visibility: 'hidden' });
    });
  });

  describe('showing the Blink component', () => {
    beforeEach(() => {
      component.instance().animate();
      jest.runOnlyPendingTimers();
    });

    it('makes the component visible after [props] rate', () => {
      expect(component.state('isVisible')).toEqual(false);

      jest.runTimersToTime(props.rate);
      expect(setInterval.mock.calls[0][1]).toEqual(props.rate);

      expect(component.state('isVisible')).toEqual(true);
      expect(component.find('span').prop('style')).toEqual({ visibility: 'visible' });
    });
  });
});
