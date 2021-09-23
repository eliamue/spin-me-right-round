import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders stuff', () => {
    const { container } = render(<App />);

    expect(container).not.toBeEmptyDOMElement();

    const swatch = screen.getByRole('display', { name: 'swatch' });

    expect(swatch.style.backgroundColor).toEqual('rgb(18, 52, 86)');
  });
});
