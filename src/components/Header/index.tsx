import { HeaderContainer } from "./style";

import dtlogo from '../../assets/dtlogo.svg'
import { useContext } from "react";
import { ModalContext } from "../../contexts/useModal";

export function Header() {
  const { openModal }: any = useContext(ModalContext);

  return (
    <HeaderContainer>
      <div>
        <img src={dtlogo} alt="dt money logo" />
        <button onClick={openModal}>Nova transação</button>
      </div>


    </HeaderContainer>
  )
}