import { FormEvent, useContext, useState } from "react";

import closeBtn from '../../assets/botao-fechar.png'
import incomeIcon from '../../assets/Entradas.png'
import outcomeIcon from '../../assets/saidas.png'

import { CloseModalBtn, FakeRadioBtn, FormContainer, TransactionTypeContainer } from "./style";

import Modal from 'react-modal';

import { ModalContext } from '../../contexts/useModal';

interface DataProps {
  title: string;
  price: number;
  type: string;
  category: string;
}

interface ModalFormProps {
  isOpen: boolean;
  onRequestClose: () => void;
  closeModal: () => void;
}

export const ModalForm = ({ isOpen, onRequestClose, closeModal }: ModalFormProps) => {
  const { createTransactions } = useContext(ModalContext)


  const [transactionType, setTransactionType] = useState('income');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

 async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    const data: DataProps = {
      title,
      price,
      type: transactionType,
      category,
    }

    await createTransactions(data);

    onRequestClose();
    setTitle('');
    setPrice(0);
    setTransactionType('income');
    setCategory('');
  }



  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="transactionModalOverlay"
    className="transactionModalContent"
  >
    <FormContainer onSubmit={handleFormSubmit}>
      <h2>Cadastrar transação</h2>
      <CloseModalBtn>
        <img src={closeBtn} alt="" onClick={closeModal} />
      </CloseModalBtn>
        <input type="text" onChange={(e) => setTitle(e.target.value) } value={title} placeholder="Nome" />
        <input type="number" onChange={(e) => setPrice(Number(e.target.value)) } value={price} placeholder="Preço" />
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
        <input type="text" onChange={(e) => setCategory(e.target.value) } value={category} placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
    </FormContainer>
  </Modal>
  )
}