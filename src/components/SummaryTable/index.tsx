import { useEffect } from "react";
import { SummaryTableContainer } from "./style";

export function SummaryTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="income">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/03/2023</td>
          </tr>

          <tr>
            <td>Hamburguer</td>
            <td className="outcome">- R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/03/2023</td>
          </tr>
        </tbody>
      </table>
    </SummaryTableContainer>
  )
}