import { FormContainer, HeaderContainer } from "./style";

import Modal from 'react-modal';

import dtlogo from '../../assets/dtlogo.svg'
import closeBtn from '../../assets/botao-fechar.png'
import { useState } from "react";

export function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <HeaderContainer>
      <div>
        <img src={dtlogo} alt="dt money logo" />
        <button onClick={openModal}>Nova transação</button>
      </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName="transactionModalOverlay"
          className="transactionModalContent"
        >
          <FormContainer>
            <h2>Cadastrar transação</h2>
            <img src={closeBtn} alt="" onClick={closeModal} />
              <input type="text" placeholder="Nome" />
              <input type="number" placeholder="Preço" />
              <input type="text" placeholder="Categoria" />
              <button type="submit">Cadastrar</button>
          </FormContainer>
        </Modal>
    </HeaderContainer>
  )
}