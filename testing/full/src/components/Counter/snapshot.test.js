import renderer from 'react-test-renderer';
import React from 'react';
import Counter from './index'

test('shanshot Counter', () => {
  const tree = renderer
    .create(<Counter counter={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});