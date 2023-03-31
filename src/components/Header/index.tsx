import { HeaderContainer } from "./style";

import dtlogo from '../../assets/dtlogo.svg'

interface HeaderProps {
  openModal: () => void;
}

export function Header({openModal}: HeaderProps) {
  return (
    <HeaderContainer>
      <div>
        <img src={dtlogo} alt="dt money logo" />
        <button onClick={openModal}>Nova transação</button>
      </div>


    </HeaderContainer>
  )
}