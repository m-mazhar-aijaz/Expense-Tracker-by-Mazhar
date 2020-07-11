import React from 'react';
import './App.css';

//Import the Global Provider
import { GlobalProvider } from './context/GlobalState'

// Import Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
      </div>
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
