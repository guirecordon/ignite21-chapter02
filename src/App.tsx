import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { GlobalStyle } from './styles/global'
import { ModalContextProvider } from './contexts/useModal';
import { ModalForm } from './components/ModalForm';
import { useState } from 'react';

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
      <ModalContextProvider>
        <Header openModal={openModal} />
        <Summary />

        <ModalForm isOpen={isOpen} onRequestClose={closeModal} closeModal={closeModal} />
      </ModalContextProvider>
      <GlobalStyle />
    </>
  );
}

