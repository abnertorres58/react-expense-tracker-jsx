import {TRANSACTION_CATEGORIES} from "../../constants/transaction-categories.jsx";
import {useState} from "react";
import {useTransactions} from "../../context/TransactionContext.jsx";

const FilterTransactions = () => {

    const { filters } = useTransactions();

    const [localfilters, setLocalFilters ] = useState(filters)

    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setLocalFilters({
            ...localfilters,
            [name]: value
        })
    }

    return (
        <form className="p-4 space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                    Filter Transactions
                </h2>

                <button className="text-sm text-blue-600 hover:text-blue-800">
                    Reset Filters
                </button>
            </div>

            <div className="space-y-2">
                <label
                    className="block text-sm font-medium text-gray-700">
                    Transaction Type
                </label>

                <select
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded-md"
                    name="type"
                    id=""
                >
                    <option value="all">All</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Category
                </label>
                <select
                    name="category"
                    className="w-full p-2 border rounded-md"
                >
                    {TRANSACTION_CATEGORIES[localfilters.type]?.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                </select>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Date Range
                </label>
                <div className="flex items-center gap-2">
                    <input
                        type="date"
                        name="dateFrom"
                        className="p-2 border rounded-md"
                        onChange={handleFilterChange}
                        value={localfilters.dateFrom}
                        placeholder="From"
                    />
                    <input
                        type="date"
                        name="dateTo"
                        className="p-2 border rounded-md"
                        onChange={handleFilterChange}
                        value={localfilters.dateFrom}
                        placeholder="To"
                    />
                </div>
            </div>

            <div className="flex justify-end gap-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border-gray-100 rounded-md
                hover:bg-gray-200"
                >Cancel</button>
                <button className="px-4 py-2 text-sm font-medium text-gray-700 border-gray-100 rounded-md
                hover:bg-blue-700"
                >Apply Filters</button>
            </div>

        </form>
    )
}

export default FilterTransactions;