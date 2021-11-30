// Import React Tools
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Import Components
import App from '../App';
import CustomRender from '../CustomRender';

describe('<App.js /> Tests with Link Components', () => {
  it('1. O primeiro link deve possuir o texto Home', () => {
    CustomRender(<App />);
    const home = screen.getByRole('link', {
      name: /home/i });
    expect(home).toBeInTheDocument();
  });

  it('2. O segundo link deve possuir o texto About', () => {
    CustomRender(<App />);
    const about = screen.getByRole('link', {
      name: /about/i });
    expect(about).toBeInTheDocument();
  });

  it('3. O terceiro link deve possuir o texto Favorite Pokémons', () => {
    CustomRender(<App />);
    const favoritePokes = screen.getByRole('link', {
      name: /Favorite Pokémons/i });
    expect(favoritePokes).toBeInTheDocument();
  });
});

describe('<App.js /> Tests with Link Redirects', () => {
  it('1.Redirects to "/" when clicking on Home', () => {
    const { history } = CustomRender(<App />);
    const home = screen.getByRole('link', {
      name: /home/i });

    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  it('2.Redirects to "/about" when clicking on About', () => {
    const { history } = CustomRender(<App />);
    const about = screen.getByRole('link', {
      name: /about/i });

    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  it('3.Redirects to "/favorites" when clicking on Favorite Pokémons', () => {
    const { history } = CustomRender(<App />);
    const favorites = screen.getByRole('link', {
      name: /Favorite Pokémons/i });

    userEvent.click(favorites);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('4.Redirects to Not Found.', () => {
    const { history } = CustomRender(<App />);
    history.push('/error');

    const notFound = screen.getByRole('heading', {
      name: /page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });
});
