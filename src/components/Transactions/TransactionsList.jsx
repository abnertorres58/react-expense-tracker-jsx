import TransactionCard from "../Transaction Card/TransactionCard.jsx";
import {useTransactions} from "../../context/TransactionContext.jsx";

const TransactionsList = () => {

    const {transactions, deleteTransaction} = useTransactions();
    return (
        <div className="bg-white p-3 rounded-lg container mx-auto my-3">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Transaction History</h1>
            </div>
            <div className="mt-3 max-h-[65vh] overflow-y-auto pt-2">
                {transactions.map((transaction) => (
                    <TransactionCard
                        deleteTransaction={deleteTransaction}
                        key={transaction.id}
                        transaction={transaction} />
                ))}
            </div>
        </div>
    )
}

export default TransactionsList;