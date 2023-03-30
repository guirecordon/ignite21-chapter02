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

export const FormContainer = styled.form`
  img {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    cursor: pointer;
  }

  h2 {
    color: var(--title);
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    border: solid 1px var(--inputBorder);
    background: var(--inputFill);
    border-radius: 5px;
    padding: 1rem 0.5rem;
    margin-bottom: 1rem;
    width: 100%;

    &::placeholder {
      color: var(--text);
    }
  }

  button[type="submit"] {
    display: block;
    padding: 1rem;
    border: 1px solid var(--green);
    background: var(--green);
    border-radius: 6px;
    color: var(--greenText);
    font-weight: 700;
    width: 100%;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`