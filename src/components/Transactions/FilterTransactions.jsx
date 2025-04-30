import { useState } from "react";
import { TRANSACTION_CATEGORIES } from "../../constants/transaction-categories";
import { useTransactions } from "../../context/TransactionContext";

const FilterTransactions = () => {
    const { filters, updateFilters } = useTransactions();
    const [localFilters, setLocalFilters] = useState(filters);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        console.log({ name, value });
        setLocalFilters({ ...localFilters, [name]: value });
    };

    const handleResetFilters = () => {
        const resetFilters = {
            type: "all",
            category: "all",
            dateFrom: "",
            dateTo: "",
        };

        setLocalFilters(resetFilters);
        updateFilters(resetFilters);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(localFilters);
        updateFilters(localFilters);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Filter Transactions</h2>
                <button
                    onClick={handleResetFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                >
                    Reset Filters
                </button>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Transaction Type
                </label>

                <select
                    onChange={handleFilterChange}
                    className="w-full p-2 border rounded-md"
                    name="type"
                    value={localFilters.type}
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
                    onChange={handleFilterChange}
                    value={localFilters.category}
                    name="category"
                    className="w-full p-2 border rounded-md"
                >
                    <option value="all">All</option>
                    {TRANSACTION_CATEGORIES[localFilters.type]?.map((category) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Date Range
                </label>

                <div className="grid grid-cols-2 gap-2">
                    <input
                        type="date"
                        name="dateFrom"
                        value={localFilters.dateFrom}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md"
                        placeholder="From"
                    />
                    <input
                        type="date"
                        name="dateTo"
                        value={localFilters.dateTo}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md"
                        placeholder="To"
                    />
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                    Cancel
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Apply Filters
                </button>
            </div>
        </form>
    );
};

export default FilterTransactions;
