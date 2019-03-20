import React from 'react'
import { shallow } from '../../../test/setup'

import CounterControl, { doIncrement, doDecrement} from './index'
import Counter from '../Counter'

describe('Local State', () => {
  it('should increment the counter in state', () => {
    const counter = 0;
    const newCounter = doIncrement(counter);

    expect(newCounter).toBe(1);
  });

  it('should decrement the counter in state', () => {
    const counter = 0;
    const newCounter = doDecrement(counter);

    expect(newCounter).toBe(-1);
  });
});

describe('App Component', () => {
  it('renders the Counter wrapper', () => {
    const wrapper = shallow(<CounterControl />);
    expect(wrapper.find(Counter)).toHaveLength(1);
  });
});