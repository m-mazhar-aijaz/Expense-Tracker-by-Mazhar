import React, { createContext, useReducer } from 'react';

// Import the Reducer
import AppReducer from './AppReducer';

// Create the initial state
const initialState = {
    transactions: [
        {id: 1, description: "Income 1", transactionAmount: 1000},
        {id: 2, description: "Expense 1", transactionAmount: -150},
        {id: 3, description: "Income 2", transactionAmount: 200},
        {id: 4, description: "Expense 2", transactionAmount: -170}
    ]
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
 
    return (<GlobalContext.Provider value={{
                transactions: state.transactions
            }}>;
            {children}
        </GlobalContext.Provider>
    )
}