import React from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import GameControl from './components/GameControl';
import WrongLetter from './components/WrongLetter';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container>
        <Header/>
        <GameControl/>
      </Container>
    </>
  );
}

export default App;
