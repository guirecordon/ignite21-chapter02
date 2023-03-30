import { createContext, useState } from 'react';

export const ModalContext = createContext({});

export function ModalContextProvider({ children }: any) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [transactionType, setTransactionType] = useState('income');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{closeModal, openModal, modalIsOpen, transactionType, setTransactionType, title, price, category, setTitle, setPrice, setCategory} }
    >
      {children}
    </ModalContext.Provider>
  );
}