// Import React Tools
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Import Components
import App from '../App';
import CustomRender from '../CustomRender';

describe('<PokemonDetails /> Tests with Components', () => {
  it('1. Selected Pokémon Info are displayed', () => {
    CustomRender(<App />);
    const details = screen.getByRole('link', {
      name: /more details/i });
    userEvent.click(details);
    const title = screen.getByRole('heading',
      { name: /pikachu details/i },
      { level: 2 });
    expect(title).toBeInTheDocument();
    expect(details).not.toBeInTheDocument();
    const summary = screen.getByRole('heading', {
      name: /summary/i }, { level: 2 });
    expect(summary).toBeInTheDocument();
    const pokemonDetails = screen.getByText(/this intelligent/i);
    expect(pokemonDetails).toBeInTheDocument();
  });

  it('2. Test if there are sections with maps', () => {
    CustomRender(<App />);
    const details = screen.getByRole('link', {
      name: /more details/i });
    userEvent.click(details);

    const title = screen.getByRole('heading', {
      name: /game locations of pikachu/i },
    { level: 2 });
    expect(title).toBeInTheDocument();

    const kantoForest = screen.getByText(/kanto viridian/i);
    const kantoPower = screen.getByText(/kanto power/i);
    expect(kantoForest && kantoPower).toBeInTheDocument();

    const image = screen.getAllByAltText('Pikachu location');
    expect(image).toHaveLength(2);

    expect(image[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(image[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('3. Test if it is possible to favorite a Pokémon through details page', () => {
    CustomRender(<App />);
    const details = screen.getByRole('link', {
      name: /more details/i });
    userEvent.click(details);

    const favorite = screen.getByRole('checkbox', {
      name: /pokémon favoritado/i });
    expect(favorite).toBeInTheDocument();

    userEvent.click(favorite);
    const favorited = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favorited).toBeInTheDocument();

    userEvent.click(favorite);
    expect(favorited).not.toBeInTheDocument();
  });
});
