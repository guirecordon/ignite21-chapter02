import { SummaryTableContainer } from "./style";

export function SummaryTable() {
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
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/03/2023</td>
          </tr>

          <tr>
            <td>Hamburguer</td>
            <td>- R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/03/2023</td>
          </tr>
        </tbody>
      </table>
    </SummaryTableContainer>
  )
}