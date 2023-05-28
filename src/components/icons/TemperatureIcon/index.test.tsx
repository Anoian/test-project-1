import React from 'react';
import { render, screen } from '@testing-library/react';
import TemperatureIcon from './index';

describe('TemperatureIcon component', () => {
  it('renders the temperature icon on correct rotation when value is within range', () => {
    const minValue = 0;
    const maxValue = 100;
    const value = 50;
    render(<TemperatureIcon minValue={minValue} maxValue={maxValue} value={value} />);
    const circleElement = screen.getByTestId('circle');
    const rotationStyle = circleElement.style.rotate;
    expect(rotationStyle).toBe('142deg');
  });

  it('renders the temperature icon at max rotation value when value is greater than range', () => {
    const minValue = 0;
    const maxValue = 100;
    const value = 200;
    render(<TemperatureIcon minValue={minValue} maxValue={maxValue} value={value} />);
    const circleElement = screen.getByTestId('circle');
    const rotationStyle = circleElement.style.rotate;
    expect(rotationStyle).toBe('284deg');
  });

  it('renders the temperature icon at min rotation value when value is smaller than range', () => {
    const minValue = 0;
    const maxValue = 100;
    const value = -100;
    render(<TemperatureIcon minValue={minValue} maxValue={maxValue} value={value} />);
    const circleElement = screen.getByTestId('circle');
    const rotationStyle = circleElement.style.rotate;
    expect(rotationStyle).toBe('0deg');
  });

  it('renders an error message when minValue is greater than maxValue', () => {
    const minValue = 100;
    const maxValue = 50;
    const value = 75;
    render(<TemperatureIcon minValue={minValue} maxValue={maxValue} value={value} />);
    const errorElement = screen.getByText('minValue must be smaller than maxValue');
    expect(errorElement).toBeInTheDocument();
  });
});
