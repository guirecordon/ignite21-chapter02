import styled from 'styled-components'

export const SummaryTableContainer = styled.div`
  table {
    width: 100%;
    text-align: left;
    padding-top: 4rem;
    border-spacing: 0 0.5rem;

    th, td {
      padding: 1rem 2rem;
    }

    th {
      color: var(--text);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5%;
    }

    td {
      background: var(--shapePrincipal);
      color: var(--text);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--title);
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }
    }
  }
`