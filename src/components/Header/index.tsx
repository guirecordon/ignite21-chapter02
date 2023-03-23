import { HeaderContainer } from "./style";

import dtlogo from '../../assets/dtlogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={dtlogo} alt="dt money logo" />
        <button>
          Nova transação
        </button>
      </div>
    </HeaderContainer>
  )
}