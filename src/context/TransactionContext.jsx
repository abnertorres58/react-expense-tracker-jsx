import {createContext, useContext, useReducer, useState} from "react";
import {TRANSACTION_TYPES} from "../constants/transaction-types.jsx";

const TransactionContext = createContext();

const initialState = {
    transactions:[]
};

const transactionReducer = (state, action) => {
    switch(action.type){
        case TRANSACTION_TYPES.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions,
                    { ...action.payload, id: Date.now() }
                ]
            };
        case TRANSACTION_TYPES.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                )
            };
        default:
            return state;
    }
}

export const TransactionProvider = ({children}) => {

    const [state, dispatch] = useReducer(transactionReducer, initialState);

    const [filters, setFilters] = useState({
        type: "all",
        category: "all",
        dateFrom: "",
        dateTo: ""
    })

    const getFilteredTransactions = () => {
        return state.transactions.filter((transaction) => {
            if (filters.type !== "all" && transaction.type !== filters.type) {
                return false;
            }

            if (filters.category !== "all" && transaction.category !== filters.category) {
                return false;
            }

            if(filters.dateFrom && filters.dateTo){
                const transactionDate = new Date(transaction.date);
                const fromDate = new Date(filters.dateFrom);
                const toDate = new Date(filters.dateTo);

                if(transactionDate < fromDate || transactionDate > toDate){
                    return false;
                }
            }

            return true;

        })
    }

    const updateFilters = (newFilters) => {
        setFilters(newFilters);
    }

    const calculateBalances = () => {
        let income = 0;
        let expense = 0;

        getFilteredTransactions().forEach((transaction) => {
            if (transaction.type === "Income") {
                income = parseFloat(transaction.amount) + income;
            } else {
                expense = parseFloat(transaction.amount) + expense;
            }
        });

        return {
            income: income.toFixed(2),
            expense: expense.toFixed(2),
            balance: (income - expense).toFixed(2)
        }
    }

    const addTransaction = (transaction) => {
        dispatch({type: TRANSACTION_TYPES.ADD_TRANSACTION, payload: transaction});
    }

    const deleteTransaction = (id) => {
        dispatch({type: TRANSACTION_TYPES.DELETE_TRANSACTION, payload: id});
    }

    return (
        <TransactionContext.Provider

            value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction,
                calculateBalances,
                updateFilters,
                filters
            }}
        >{children}</TransactionContext.Provider>
    )
}

export const useTransactions = () => {
    const context = useContext(TransactionContext);
    if(!context){
        throw new Error("UseTransactions must be used within a TransactionProvider");
    }
    return context;
};