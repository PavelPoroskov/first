import React from 'react'
import { render, fireEvent, waitForElement, wait, waitForDomChange } from 'react-testing-library'

import CounterControl, { doIncrement, doDecrement} from './index'
import Counter from '../Counter'

describe('CounterControl: inc/dec', () => {
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

describe('CounterControl', () => {
  it('renders the Counter wrapper', () => {
    const { queryByTestId } = render(<CounterControl />);
    expect(queryByTestId('counter')).toBeInTheDocument()
  });

  it('passes all props to Counter wrapper', () => {
    const { queryByTestId } = render(<CounterControl />);
    expect(queryByTestId('counter')).toHaveTextContent('0')
  });

  it('press inc', async () => {
    const { queryByTestId } = render(<CounterControl />);

    fireEvent.click(queryByTestId('btn-inc'))
    const greetingTextNode = await waitForElement(() =>
      queryByTestId('counter')
    )

    expect(queryByTestId('counter')).toHaveTextContent('1')
  });

  it('press dec', async () => {
    const { queryByTestId } = render(<CounterControl />);

    fireEvent.click(queryByTestId('btn-dec'))
    const greetingTextNode = await waitForElement(() =>
      queryByTestId('counter')
    )

    expect(queryByTestId('counter')).toHaveTextContent('-1')
  });

//   it('fetch on mount', async () => {
//     //todo: mock fetch

//     const { queryByTestId, queryAllByTestId } = render(<CounterControl />);

//     const greetingNode = await waitForElement(() => queryByTestId('list-fetched'))

// //    expect(queryByTestId('list-item')).not.toBeEmpty()
//     expect(queryAllByTestId('list-item')).toHaveLength(4)
//   });
});