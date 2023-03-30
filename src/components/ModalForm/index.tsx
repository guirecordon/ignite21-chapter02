import closeBtn from '../../assets/botao-fechar.png'
import incomeIcon from '../../assets/Entradas.png'
import outcomeIcon from '../../assets/saidas.png'

import { CloseModalBtn, FakeRadioBtn, FormContainer, TransactionTypeContainer } from "./style";

import Modal from 'react-modal';
import { useContext, useState } from "react";
import { ModalContext } from '../../contexts/useModal';


export const ModalForm = () => {
  const [transactionType, setTransactionType] = useState('income');

  const { modalIsOpen, closeModal }: any = useContext(ModalContext)


  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    overlayClassName="transactionModalOverlay"
    className="transactionModalContent"
  >
    <FormContainer>
      <h2>Cadastrar transação</h2>
      <CloseModalBtn>
        <img src={closeBtn} alt="" onClick={closeModal} />
      </CloseModalBtn>
        <input type="text" placeholder="Nome" />
        <input type="number" placeholder="Preço" />
        <TransactionTypeContainer>
          <FakeRadioBtn type="button"
            onClick={() => setTransactionType('income')} 
            isActive={transactionType === 'income'}
            activeColor="green"
          >
            <img src={incomeIcon} alt="" />
            <span>Entrada</span>
          </FakeRadioBtn>

          <FakeRadioBtn type="button"
            onClick={() => setTransactionType('outcome')}
            isActive={transactionType === 'outcome'}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="" />
            <span>Saída</span>
          </FakeRadioBtn>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
    </FormContainer>
  </Modal>
  )
}