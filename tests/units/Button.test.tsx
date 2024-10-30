import { render, screen } from '@testing-library/react';
import Button from '../../src/components/Button';
import { describe, expect, it } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../src/pages';

describe('Button', () => {
  it('renders the button', () => {
    const { container } = render(<Button>Hello World</Button>);
    const htmlContent = container.textContent;
    expect(htmlContent).toEqual('Hello World');
  });
  it('increment counter by 2 when clicked twice', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    await userEvent.click(screen.getByTestId('increment'));
    await userEvent.click(screen.getByTestId('increment'));
    const counter = screen.getByTestId('counter');
    expect(counter.textContent).toEqual('Number: 2');
  });
});
