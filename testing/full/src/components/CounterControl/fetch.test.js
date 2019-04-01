import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import CounterControl from './index'

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

it('fetch on DidMount: react-dom/test-utils', async () => {
//   //todo: 
//   // 1) mock fetch with value
//   // 2) no wait(2500)
//   // 3) no error act(...) 
//   // Test first render and effect
//   act(() => {
//     ReactDOM.render(<CounterControl />, container);
//     // (async function() {
//     //   let aaw = await wait(2500)
//     // })()
//   });
//   await wait(2500)
// //  const button = container.querySelector('[data-testid="list-item"]');
//   const items = container.querySelectorAll('li');
//   //console.log(button)
//   expect(items).toHaveLength(4);
//   // expect(document.title).toBe('You clicked 0 times');
});