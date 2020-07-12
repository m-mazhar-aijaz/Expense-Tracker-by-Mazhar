import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <IncomeExpenses />
      <TransactionHistory />
      <AddTransaction />
    </GlobalProvider>
  )
}

export default App;