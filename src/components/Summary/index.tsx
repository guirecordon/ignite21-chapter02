import { SummaryTable } from "../SummaryTable";
import { SummaryContainer } from "./style";

import entradas from '../../assets/Entradas.png'
import saidas from '../../assets/saidas.png'
import total from '../../assets/Total.png'
import { useContext } from "react";
import { ModalContext } from "../../contexts/useModal";
 
export function Summary() {
  const { transactions } = useContext(ModalContext)

  const summaryValues = transactions.reduce((acc, currVal) => {

    if(currVal.type === 'income') {
      acc.totalAll += currVal.price;
      acc.totalIn += currVal.price
    } else {
      acc.totalAll -= currVal.price;
      acc.totalOut += currVal.price
    }

    return acc;
  }, {
    totalIn: 0,
    totalOut: 0,
    totalAll: 0, 
  })

  console.log(summaryValues)

  return (
    <SummaryContainer>
      <div className="summaryWrapper">
        <div className="card">
          <header>
            <span>Entradas</span>
            <img src={entradas} alt="" />
          </header>

          <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summaryValues.totalIn)}</strong>
        </div>
        <div className="card">
          <header>
            <span>Saídas</span>
            <img src={saidas} alt="" />
          </header>

          <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summaryValues.totalOut)}</strong>
        </div>
        <div className="total card">
          <header>
            <span>Total</span>
            <img src={total} alt="" />
          </header>

          <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summaryValues.totalAll)}</strong>
        </div>
      </div>
      <SummaryTable />
    </SummaryContainer>
  )
}