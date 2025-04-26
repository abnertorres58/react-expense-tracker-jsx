import TransactionCard from "../Transaction Card/TransactionCard.jsx";

const TransactionsList = () => {
    const transactions = [
        {
            id: 1,
            description: "Salary",
            amount: 5000,
            type: "Income",
            category: "Salary",
            date: "2021-01-01"
        },
        {
            id: 2,
            description: "Groceries",
            amount: 2000,
            type: "Expense",
            category: "Food",
            date: "2021-01-02"
        },
        {
            id: 3,
            description: "Entertainment",
            amount: 1000,
            type: "Expense",
            category: "Entertainment",
            date: "2021-01-03"
        }
    ];
    return (
        <div className="bg-white p-3 rounded-lg container mx-auto my-3">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Transaction History</h1>
            </div>
            <div className="mt-3 max-h-[65vh] overflow-y-auto pt-2">
                {transactions.map((transaction) => (
                    <TransactionCard key={transaction.id} transaction={transaction} />
                ))}
            </div>
        </div>
    )
}

export default TransactionsList;