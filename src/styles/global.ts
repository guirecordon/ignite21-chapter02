import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --shapePrincipal: #FFFFFF;
    --background: #F0F2F5;
    --title: #363F5F;
    --text: #969CB2;
    --blueText: #eff6ff;
    --greenText: #f0fdf4;
    --inputFill: #E7E9EE;
    --inputBorder: #D7D7D7;

    --blue: #5429CC;
    --lightBlue: #6933ff;
    --green: #33CC95;
    --red: #E52E4D;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .transactionModalOverlay {
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .transactionModalContent {
    position: relative;
    width: 100%;
    max-width: 480px;
    background: var(--background);
    padding: 3rem 2rem;
    border-radius: 5px;
  }
`