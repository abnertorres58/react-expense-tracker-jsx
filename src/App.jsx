import React from 'react';
import './App.css';
import Balance from "./components/Balance/Balance.jsx"; // You can delete this if you're not using it

function App() {
    return (
        <div className="p-5">
            <div className="max-w-screen-lg mx-auto">
                <Balance />
            </div>
        </div>
    );
}

export default App;