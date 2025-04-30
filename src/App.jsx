import React, {useState} from 'react';
import './App.css';
import Balance from "./components/Balance/Balance.jsx";
import TransactionsList from "./components/Transactions/TransactionsList.jsx"; // You can delete this if you're not using it

function App() {
    const [transactions, setTransactions] = useState([]);

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((transaction) => transaction.id !== id));
    }

    return (
        <div className="p-5">
            <div className="max-w-screen-lg mx-auto">
                <Balance setTransaction={setTransactions}/>
                <TransactionsList
                    deleteTransaction={deleteTransaction}
                transactions={transactions}
                />
            </div>
        </div>
    );
}

export default App;