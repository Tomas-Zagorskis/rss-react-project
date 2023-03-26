import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputNested } from './Input';

test('InputNested component', async () => {
  const ref = { current: null };
  render(
    <InputNested
      id="test-id"
      value="test-value"
      type="checkbox"
      title="Test Input"
      name="test-input"
      defaultChecked={true}
      ref={ref}
    />
  );

  const label = screen.getByText(/Test Input/i);
  const input = screen.getByRole('checkbox');

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('id', 'test-id');
  expect(input).toHaveAttribute('value', 'test-value');
  expect(input).toHaveAttribute('name', 'test-input');
  expect(input).toHaveAttribute('type', 'checkbox');
  expect(input).toHaveAttribute('checked');
  expect(ref.current).toEqual(input);
});
