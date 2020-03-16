import React from 'react';
import { render } from '@testing-library/react';
import {App, total} from './App';

const add = jest.fn(() => 3);

test('<add>', () => {
  expect(add(1,2)).toBe(3);
  expect(true).toBeTruthy()
  expect(total(10, 15)).toBe("$25")
});
