import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: -68px auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  div {
   padding: 1rem 2rem; 
   background: var(--shapePrincipal);
   border-radius: 5px;
  
   img {
      width: 32px;
      height: 32px;
    }

    strong {
      font-size: 2.25rem;
    }
  }

  header {
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .total {
    background: var(--green);
    color: var(--greenText);
  }

`