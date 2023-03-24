import { SummaryTable } from "../SummaryTable";
import { SummaryContainer } from "./style";

import entradas from '../../assets/Entradas.png'
import saidas from '../../assets/Saídas.png'
import total from '../../assets/Total.png'
 
export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <img src={entradas} alt="" />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={saidas} alt="" />
        </header>

        <strong>R$ 1.250,00</strong>
      </div>
      <div className="total">
        <header>
          <span>Total</span>
          <img src={total} alt="" />
        </header>

        <strong>R$ 16.141,00</strong>
      </div>
      <SummaryTable />
    </SummaryContainer>
  )
}