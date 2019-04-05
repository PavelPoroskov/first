import React from 'react';
import CounterControl from './index'

// import { render, waitForElement } from 'react-testing-library'

// it('fetch on mount', async () => {
//   //todo: mock fetch
//   const mockSuccessResponse = [ "item 11", "item 22", "item 33", "item 44", "item 55" ];
//   const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
//   const mockFetchPromise = Promise.resolve({ // 3
//     json: () => mockJsonPromise,
//   });
//   jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

//   const { queryAllByTestId, queryByTestId } = render(<CounterControl />);

//   const greetingNode = await waitForElement(() => queryByTestId('list-fetched'))

//   expect(global.fetch).toHaveBeenCalledTimes(1);
// //  expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/items.json');
//   expect(global.fetch).toHaveBeenCalledWith('/items.json');

//   expect(queryAllByTestId('list-item')).toHaveLength(5)
// });


import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

it('fetch on DidMount: react-dom/test-utils, mock', async () => {
  const mockSuccessResponse = [ "item 11", "item 22", "item 33", "item 44", "item 55" ];
  const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
  const mockFetchPromise = Promise.resolve({ // 3
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  //wait for update
  //https://github.com/facebook/react/pull/14853
  act(() => {
    ReactDOM.render(<CounterControl />, container);
    // (async function() {
    //   let aaw = await wait(2500)
    // })()
  });
  // const button = container.querySelector('button');
  // act(() => {
  //   button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  // });
  await wait(500)

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('/items.json');

//  const button = container.querySelector('[data-testid="list-item"]');
  const items = container.querySelectorAll('li');
  //console.log(button)
  expect(items).toHaveLength(5);
  // expect(document.title).toBe('You clicked 0 times');
});