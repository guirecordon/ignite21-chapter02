import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: var(--blue);

  div {
    margin: 0 auto;
    padding: 2.25rem 0 8.5rem;
    width: 100%;
    max-width: 1120px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    padding: 0.75rem 2rem;
    outline: none;
    border: none;
    border-radius: 5px;
    background: var(--lightBlue);
    color: var(--blueText);
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

