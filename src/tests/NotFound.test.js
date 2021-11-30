// Import React Tools
import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// Import Components
import { NotFound } from '../components';
import CustomRender from '../CustomRender';

describe('<NotFound.js /> Tests with Components', () => {
  it('1. H2 with specific test', () => {
    CustomRender(<NotFound />);
    const heading = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i });
    expect(heading).toBeInTheDocument();
  });

  it('2. Image with specific adress', () => {
    CustomRender(<NotFound />);
    const image = screen.getByRole('img', {
      name: /Pikachu crying/i });
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
