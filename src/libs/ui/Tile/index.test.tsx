import React from 'react';
import { render, screen } from '@testing-library/react';
import Tile from './index';

describe('Tile component', () => {
  it('renders children correctly', () => {
    render(<Tile>Test Content</Tile>);
    const childElement = screen.getByText('Test Content');
    expect(childElement).toBeInTheDocument();
  });
});
