import {useState} from "react";
import {useTransactions} from "../../context/TransactionContext.jsx";

const CreateTransactionForm = () => {

    const {addTransaction} = useTransactions()

    const [ formData, setFormData] = useState({
        type: "Income",
        amount: 0,
        category: "",
        description: "",
        date: new Date().toISOString().split("T")[0]
    });
    const categories= {
        Income: ["Salary", "Freelance", "Investments", "Gift", "Other"],
        Expense: [
            "Food",
            "Transportation",
            "Utilities",
            "Entertainment",
            "Shopping",
            "Other"
        ]
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            ...formData,
            id: Date.now()});

    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-left">
                Create New Transaction
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center">

                    <div className="flex gap-4 mb-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="type"
                                value="Expense"
                                checked={formData.type === "Expense"}
                                className="mr-2"
                                onChange={handleChange}
                                required
                            />
                            <span className="text-red-500 font-medium">Expense</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="type"
                                value="Income"
                                checked={formData.type === "Income"}
                                className="mr-2"
                                onChange={handleChange}
                                required
                            />
                            <span className="text-green-500 font-medium">Income</span>
                        </label>
                    </div>


                </div>

                <div>
                    <label htmlFor="amount" className="block text-gray-700 mb-2 text-left">
                        Amount
                    </label>
                    <input
                        type="number"
                        name= "amount"
                        id="amount"
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block text-gray-700 mb-2 text-left">
                        Category
                    </label>
                    <select
                        name="category"
                        id="category"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        onChange={handleChange}
                    >
                        <option value="">Select Category</option>
                        {
                            categories[formData.type].map((category) => (
                                <option key={category} value={category}>{category}</option>
                            ))
                        }

                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2 text-left" htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={formData.description}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2 text-left" htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        onChange={handleChange}
                        value={formData.date}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md text-white font-medium ${
                    formData.type === "Expense" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                }`}
                >
                    Add {formData.type === "Expense" ? "Expense" : "Income"}
                </button>

            </form>
        </div>
    )
}

export default CreateTransactionForm;