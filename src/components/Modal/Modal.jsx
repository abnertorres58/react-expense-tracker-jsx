import {useState, useEffect } from "react";
import {CircleX} from "lucide-react";

const Modal = ({ button, children, size='md' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const sizeClass = {
        sm: "min-w-[90vh] min-w-[30vw]",
        md: "min-w-[90vh] min-w-[50vw]",
        lg: "min-w-[90vh] min-w-[70vw]"
    }

    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        if(isOpen){
            document.addEventListener("keydown", handleEscapeKey);
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        }
    }, [isOpen])

    return (
        <div className="flex flex-col items-center">
            <div
                onClick={() => {
                    console.log("Clicked");
                    setIsOpen(!isOpen);
                }}
                className="cursor-pointer"
            >
                {button}
            </div>
            {isOpen && (<div
            className={`bg-black/50 p-3 min-h-screen absolute top-0 right-0 left-0 min-w-screen z-50
            flex justify-center items-center backdrop-blur-md`}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className="bg-white p-2 rounded-full cursor-pointer absolute top-3 right-3">
                    <CircleX className="text-green-500"/>
                </div>
                <div className={`bg-white min-h-[60vh] rounded-lg min-w-[90vw] ${sizeClass[size]}`}
                >
                    {children}
                </div>
            </div>)}
        </div>
    )
}

export default Modal;