// Import React Tools
import React from 'react';
import { screen } from '@testing-library/react';

// Import Components
import { FavoritePokemons } from '../components';
import CustomRender from '../CustomRender';
import pokemons from '../data';

describe('<FavoritePokemons.js /> Tests with Components', () => {
  it('1. No favorite pokemon found exists', () => {
    CustomRender(<FavoritePokemons />);
    const notFound = screen.getByText(/No favorite pokemon/i);
    expect(notFound).toBeInTheDocument();
  });

  it('2. All Favorite Cards are shown', () => {
    CustomRender(<FavoritePokemons pokemons={ pokemons } />);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();

    const mew = screen.getByText(/mew/i);
    expect(mew).toBeInTheDocument();

    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
  });
});
