import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

const red = 'rgb(84, 24, 18)'; //#541812
const blue = 'rgb(0, 51, 235)'; //#0033eb
const green = 'rgb(59, 181, 3)'; //#3bb503
const yellow = 'rgb(255, 236, 0)'; //#ffec00

describe('App', () => {
  it('renders stuff', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();

    const swatch = screen.getByRole('display', { name: 'swatch' });
    expect(swatch.style.backgroundColor).toEqual(red);

    const colorpick = screen.getByRole('color', { name: 'color-input' });
    fireEvent.change(colorpick, blue);
    waitFor(() =>
      expect(colorpick).toHaveStyle({ 'background-color': blue })
    );

    const colorpickle = screen.getByRole('color', { name: 'color-input' });
    fireEvent.change(colorpickle, green);
    waitFor(() =>
      expect(colorpickle).toHaveStyle({ 'background-color': green })
    );

    const colorpickling = screen.getByRole('color', { name: 'color-input' });
    fireEvent.change(colorpickling, yellow);
    waitFor(() =>
      expect(colorpickling).toHaveStyle({ 'background-color': yellow })
    );
  });
});
