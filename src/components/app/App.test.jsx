import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders stuff', () => {
    const { container } = render(<App />);

    expect(container).not.toBeEmptyDOMElement();

    const swatch = screen.getByRole('display', { name: 'swatch' });

    expect(swatch.style.backgroundColor).toEqual('rgb(18, 52, 86)');

    const colorpick = screen.getByRole('color', { name: 'color-input' });

    fireEvent.change(colorpick, 'rgb(98, 92, 96)');
    waitFor(() =>
      expect(colorpick).toHaveStyle({ 'background-color': 'rgb(98, 92, 96)' })
    );
  });
});
