import React from 'react';
import {Plus} from "lucide-react";
import Modal from "../Modal/Modal.jsx";
import CreateTransactionForm from "../Create Transaction/CreateTransactionForm.jsx";
import { useTransactions } from "../../context/TransactionContext.jsx";

const Balance = () => {

    const { calculateBalances } = useTransactions();
    const {income, expense, balance} = calculateBalances();

    return (
        <div className="bg-white p-5 rounded-lg container mx-auto my-5">
        <h1 className="text-2xl font-bold">Your Balance</h1>
        <div className="flex justify-between items-center">
            <div className="">
                <h2 className="mt-3 text-green-500 font-extrabold text-4xl">
                    {balance}
                </h2>
                <div className="flex gap-4 mt-2">
                    <p className="text-green-500">Income: {income}</p>
                    <p className="text-red-500">Expense: {expense}</p>
                </div>
            </div>
            <Modal
                size="sm"
                button={<button className="bg-green-500 text-white px-4 py-2 rounded-3xl hover:bg-green-600
                        hover:scale-110 transition-all duration-300 flex gap-2 items-center">
                <Plus className="w-6 h-6"/>Add Transaction
            </button>
            }
            >
                <CreateTransactionForm/>
            </Modal>
        </div>
    </div>
    );
};

export default Balance;