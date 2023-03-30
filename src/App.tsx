import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { GlobalStyle } from './styles/global'
import { ModalContextProvider } from './contexts/useModal';
import { ModalForm } from './components/ModalForm';

export function App() {
  return (
    <>
      <ModalContextProvider>
        <Header />
        <Summary />

        <ModalForm />
      </ModalContextProvider>
      <GlobalStyle />
    </>
  );
}

