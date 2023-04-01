import styled from "styled-components"
import { transparentize } from 'polished'

export const FormContainer = styled.form`
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

export const CloseModalBtn = styled.button`
  img {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    cursor: pointer;
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  img {
    width: 24px;
    height: 24px;
  }
`

interface FakeRadioBtnProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const FakeRadioBtn = styled.button<FakeRadioBtnProps>`
    span {
      color: var(--title);
    }

    background: ${props => props.isActive ? transparentize(0.9, colors[props.activeColor])  : 'transparent'};
    border: solid 2px ${props => props.isActive ? transparentize(0.9, colors[props.activeColor])  : 'transparent'};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 0.65rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    transition: border 0.2s;

    &:hover {
      border: solid 2px var(--text);
    }
`