import { useEffect, useState } from "react";
import { SummaryTableContainer } from "./style";
import { api } from "../../services/api";


interface TableProps {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function SummaryTable() {
  const [transactions, setTransactions] = useState<TableProps[]>([])

  useEffect(() => {
     api.get('transactions')
       .then(response => setTransactions(response.data))
  }, [])

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
              <td className="income">{transaction.value}</td>
              <td>{transaction.category}</td>
              <td>maio</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </SummaryTableContainer>
  )
}