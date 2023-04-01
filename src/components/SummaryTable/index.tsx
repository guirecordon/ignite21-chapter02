import { useContext } from "react";
import { EmptyPager, SummaryTableContainer } from "./style";
import { ModalContext } from "../../contexts/useModal";

export function SummaryTable() {
  const { transactions } = useContext(ModalContext)

  return (
    <SummaryTableContainer>
      {transactions.length > 0 ? (
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
              <td>
                {
                  transaction.title[0].toUpperCase()
                  + 
                  transaction.title.slice(1)
                }
              </td>
              <td className={transaction.type}>{
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.price)
              }</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(transaction.createdAt)}</td>
            </tr> 
          ))}
        </tbody>
      </table>
      ) : (
        <EmptyPager>Clique no botão do canto direito superior para adicionar transações.</EmptyPager>
      )}

    </SummaryTableContainer>
  )
}