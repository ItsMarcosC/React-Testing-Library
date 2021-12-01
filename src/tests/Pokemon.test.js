// Import React Tools
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Import Components
import App from '../App';
import CustomRender from '../CustomRender';

describe('<Pokemon /> Tests with Components', () => {
  it('1. Pokemon info is all correct', () => {
    CustomRender(<App />);
    const name = screen.getByTestId('pokemon-name');
    expect(name).toHaveTextContent('Pikachu');

    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent('Electric');

    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toHaveTextContent('Average weight: 6.0 kg');

    const image = screen.getByAltText('Pikachu sprite');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('2. Test Pokemon details', () => {
    CustomRender(<App />);
    const attr = screen.getByText('More details');
    expect(attr).toHaveAttribute('href', '/pokemons/25');
  });

  it('3. Test link redirect', () => {
    const { history } = CustomRender(<App />);
    const details = screen.getByText(/more details/i);

    userEvent.click(details);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  it('4.Star icon on favorites', () => {
    CustomRender(<App />);
    const details = screen.getByText(/more details/i);
    userEvent.click(details);

    const checked = screen.getByRole('checkbox');
    userEvent.click(checked);

    const favorites = screen.getByRole('img', { name: /pikachu is marked/i });
    expect(favorites).toHaveAttribute('src', '/star-icon.svg');
    expect(favorites).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
