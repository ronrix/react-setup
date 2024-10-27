import { render } from '@testing-library/react';
import Button from '../../src/components/Button';
import { describe, expect, it } from 'vitest';
// import userEvent from '@testing-library/user-event';
// import Home from '../../src/pages';

describe('Button', () => {
  it('renders the button', () => {
    const { container } = render(<Button>Hello World</Button>);
    const htmlContent = container.textContent;
    expect(htmlContent).toEqual('Hello World');
  });

  // NOTE: This test is failing because zustand stores are not being recognized by vitest
  // it('counter is 0', async () => {
  //   const { getByTestId } = render(<Home />);
  //   const counter = getByTestId('counter');
  //   expect(counter.textContent).toBe('Number: 0');
  // });
  //
  // it('increments the counter', async () => {
  //   const { getByTestId } = render(<Home />);
  //   const counter = getByTestId('counter');
  //   await userEvent.click(getByTestId('increment'));
  //   expect(counter.textContent).toBe('Number: 1');
  // });
  //
  // it('decrements the counter', async () => {
  //   const { getByTestId } = render(<Home />);
  //   const counter = getByTestId('counter');
  //   await userEvent.click(getByTestId('decrement'));
  //   expect(counter.textContent).toBe('Number: 0');
  // });
});
