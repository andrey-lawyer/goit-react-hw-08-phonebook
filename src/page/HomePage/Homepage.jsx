import React from 'react';
import { Home, Span, TitleHome } from './HomePage.styled';

const HomePage = () => {
  return (
    <Home>
      <TitleHome>
        You are welcome!
        <Span> Phonebook ☎︎ </Span>
      </TitleHome>
    </Home>
  );
};

export default HomePage;
