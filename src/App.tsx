import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';

export function App() {
  return (
    <>
      <Header />
      <Summary />
      <GlobalStyle />
    </>
  );
}

