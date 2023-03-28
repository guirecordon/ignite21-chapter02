import styled from 'styled-components'

export const SummaryTableContainer = styled.div`
  table {
    width: 100%;
    text-align: left;

    th, td {
      padding: 1rem 2rem;
    }

    th {
      color: var(--text);
      font-weight: 400;
    }

    td {
      background: var(--shapePrincipal);
    }
  }
`