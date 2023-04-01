import { useContext, useEffect, useState } from "react";
import { SummaryTableContainer } from "./style";
import { api } from "../../services/api";
import { ModalContext } from "../../contexts/useModal";


interface TableProps {
  id: number;
  title: string;
  price: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function SummaryTable() {
  const { transactions } = useContext(ModalContext)

  return (
    <SummaryTableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.price)
              }</td>
              <td>{transaction.category}</td>
              <td>maio</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </SummaryTableContainer>
  )
}