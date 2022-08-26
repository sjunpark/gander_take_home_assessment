import React from 'react';
import { render, screen } from '@testing-library/react';
import { addingNumbers } from '../CalculateApi';

test('Add two numbers 1 and 2 to equal 3', async () => {
  expect(await addingNumbers(1,2)).toBe(3);
})

test('Add two numbers -1 and 2 to equal 1', async () => {
  expect(await addingNumbers(-1,2)).toBe(1);
})

test('Add two numbers 1 and -2 to equal -1', async () => {
  expect(await addingNumbers(1,-2)).toBe(-1);
})
