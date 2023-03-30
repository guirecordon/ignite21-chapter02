import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalContextProvider({ children }: any) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{closeModal, openModal, modalIsOpen} }
    >
      {children}
    </ModalContext.Provider>
  );
}