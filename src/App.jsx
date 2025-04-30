import './App.css';
import Balance from "./components/Balance/Balance.jsx";
import TransactionsList from "./components/Transactions/TransactionsList.jsx"; // You can delete this if you're not using it

function App() {

    return (
        <div className="p-5">
            <div className="max-w-screen-lg mx-auto">
                <Balance/>
                <TransactionsList/>
            </div>
        </div>
    );
}

export default App;