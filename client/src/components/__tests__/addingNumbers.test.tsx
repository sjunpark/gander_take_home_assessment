import React from 'react';
import { render, screen } from '@testing-library/react';
import { fetchData } from '../AddingNumbers';

test('Add two numbers 1 and 2 to equal 3', async () => {
  expect(await fetchData(1,2)).toBe(3);
})

test('Add two numbers -1 and 2 to equal 1', async () => {
  expect(await fetchData(-1,2)).toBe(1);
})

test('Add two numbers 1 and -2 to equal -1', async () => {
  expect(await fetchData(1,-2)).toBe(-1);
})