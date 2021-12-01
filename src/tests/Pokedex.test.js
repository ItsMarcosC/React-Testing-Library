// Import React Tools
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Import Components
import App from '../App';
import CustomRender from '../CustomRender';

describe('<Pokedex /> Tests with Components', () => {
  beforeEach(() => (CustomRender(<App />)));

  it('1. H2 with "Encountered Pokemons"', () => {
    const heading = screen.getByRole('heading', {
      name: /Encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });

  it('2. Test Select Type', () => {
    const buttonType = screen.getByRole('button', { name: /fire/i });
    userEvent.click(buttonType);
    const fire = screen.getAllByText(/fire/i);
    expect(fire[0]).toBeInTheDocument();
  });

  it('3. Test Next Button', () => {
    const button = screen.getByRole('button', {
      name: /Próximo pokémon/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
  });

  it('4. Test filter buttons', () => {
    const NUMBEROFBUTTONS = 7;
    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons.length).toEqual(NUMBEROFBUTTONS);
  });

  it('5. Test reset button', () => {
    const button = screen.getByRole('button', { name: /All/i });
    userEvent.click(button);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
