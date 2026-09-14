import { Link } from "react-router-dom";

export default function FormActions({ backTo, submitText }) {
    return (
        <div className="relative flex justify-center items-center
            gap-5 mt-8">
            <Link className="relative flex justify-center 
            items-center text-white border border-white
            px-5 py-1 rounded-3xl" to={backTo}>Back</Link>
            <button className="relative flex items-center 
            justify-center text-white border border-white
            px-5 py-1 rounded-3xl hover:bg-(--secondary-colour)
            transition-all duration-300 ease-in-out"
            type="submit"
            >{submitText}</button>
        </div>
    );
}