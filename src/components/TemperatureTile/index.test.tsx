import React from 'react';
import { render, screen } from '@testing-library/react';
import TemperatureTile from './index';

jest.mock('components/icons/TemperatureIcon', () => {
  return (_props: any) => (
    <div data-testid="mock-temperature-icon">
      Mock TemperatureIcon Component
    </div>
  );
});

describe('TemperatureTile component', () => {
  it('renders temperature value correctly', () => {
    render(<TemperatureTile minValue={-30} maxValue={50} value={25} />);
    const valueElement = screen.getByText('25°C');
    expect(valueElement).toBeInTheDocument();
  });

  it('renders mocked TemperatureIcon component', () => {
    render(<TemperatureTile minValue={-30} maxValue={50} value={25} />);
    const mockIconElement = screen.getByTestId('mock-temperature-icon');
    expect(mockIconElement).toBeInTheDocument();
  });
});
