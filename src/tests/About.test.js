// Import React Tools
import React from 'react';
import { screen } from '@testing-library/react';

// Import Components
import { About } from '../components';
import CustomRender from '../CustomRender';

describe('<About.js /> Tests Pokedex elements', () => {
  it('1. Pokédex Header on h2', () => {
    CustomRender(<About />);
    const header = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2 });
    expect(header).toBeInTheDocument();
  });

  it('2. Tests if there are 2 paragraphs', () => {
    CustomRender(<About />);
    const p1 = screen.getByText(/This application simulates/i);
    expect(p1).toBeDefined();
    const p2 = screen.getByText(/One can filter/i);
    expect(p2).toBeDefined();
  });

  it('3. Tests if img is present', () => {
    CustomRender(<About />);
    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
