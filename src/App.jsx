import React, {useState} from 'react';
import './App.css';
import Balance from "./components/Balance/Balance.jsx";
import TransactionsList from "./components/Transactions/TransactionsList.jsx"; // You can delete this if you're not using it

function App() {
    const [transactions, setTransactions] = useState([]);

    const calculateBalances = () => {
        let income = 0;
        let expense = 0;

        transactions.forEach((transaction) => {
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

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
    }

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    }

    const {income, expense, balance} = calculateBalances();

    return (
        <div className="p-5">
            <div className="max-w-screen-lg mx-auto">
                <Balance
                    income={income}
                    expense={expense}
                    balance={balance}
                    addTransaction={addTransaction}/>
                <TransactionsList
                    deleteTransaction={deleteTransaction}
                transactions={transactions}
                />
            </div>
        </div>
    );
}

export default App;