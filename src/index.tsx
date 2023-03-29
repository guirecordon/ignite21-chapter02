import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs'

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          value: 12000,
          type: 'income',
          category: 'Venda',
          createdAt: new Date('2023-03-13T03:24:00')
        },
        {
          id: 2,
          title: 'Hamburguer',
          value: 59,
          type: 'outcome',
          category: 'Alimentação',
          createdAt: new Date('2023-03-12T11:46:00')
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

