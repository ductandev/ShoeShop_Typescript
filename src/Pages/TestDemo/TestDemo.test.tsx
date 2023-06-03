import React from 'react';
import { render } from '@testing-library/react';
import TestDemo, { tinhTong } from './TestDemo';
import '@testing-library/jest-dom'; // Import thư viện jest-dom

describe('tinhTong', () => {
  test('tính tổng của 2 số nguyên', () => {
    expect(tinhTong(2, 3)).toBe(5);
  });

  test('tính tổng của 2 số thập phân', () => {
    expect(tinhTong(1.5, 2.5)).toBeCloseTo(4);
  });
});

describe('TestDemo', () => {
  test('renders TestDemo component', () => {
    const { getByText } = render(<TestDemo />);
    const element = getByText('TestDemo');
    expect(element).toBeInTheDocument();
  });
});
