import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders stuff', () => {
    const { container } = render(<App />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
