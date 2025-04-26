import {TrashIcon} from "lucide-react";

const TransactionCard = ({ transaction }) => {
    const{id, description, amount, type, category, date} = transaction;
    return (
        <div className="flex flex-col gap-3 border-b-2 border-gray-200 mb-3 p-2 hover:bg-gray-100">
            <div className="flex justify-between items-center">
                <div className="">
                    <h2
                        className={`text-x1 font-bold ${
                            type === "Income" ? "text-green-500" : "text-red-500"
                        }`}>
                        {description}
                        </h2>
                    <p className="text-sm text-gray-500">
                        {category}
                    </p>
                </div>

                <div className="flex items-center gap-5">
                    <h2 className={`text-xl font-bold ${
                        type === "Income" ? "text-green-500" : "text-red-500"
                    }`}
                    >{amount.toFixed(2)}</h2>
                </div>

                <button className="bg-red-500 text-white px-2 py-2 rounded-full hover:bg-red-600">
                    <TrashIcon className="w-6 h-6"/>
                </button>


            </div>
        </div>
    )
}

export default TransactionCard;