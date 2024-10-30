import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '../../src/pages';
import { MemoryRouter } from 'react-router-dom';
import About from '../../src/pages/about';

describe('pages', () => {
  it('should render home page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const buttonText = screen.getByTestId('increment').textContent;
    expect(buttonText).toEqual('increment');
  });
  it('should render about page', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const htmlContent = screen.getByTestId('about').textContent;
    expect(htmlContent).toEqual('About');
  });
});
