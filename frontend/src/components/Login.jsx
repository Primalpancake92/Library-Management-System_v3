import { Link } from "react-router-dom";
import useAuth from "../components/Login";
import Dots from "./Dots";

function LoginForm() {
    const { error, loading, user } = useAuth(email, password);
    return (
        <div className="relative flex w-full h-screen justify-center items-center
        z-11">
            <form className="flex flex-col p-2.5 text-white border
            border-white w-150 h-120 rounded-3xl justify-center items-center">
                <div className="flex flex-col items-center gap-5">
                    <label className="text-lg">Email</label>
                    <input placeholder="john.smith@email.com" type="email"
                    className="px-3 py-1 rounded-full focus:border-blue-500">
                    </input>
                    <label className="text-lg">Password</label>
                    <input type="password" placeholder="Enter here" className="
                    rounded-full border border-white px-3 py-1">
                    </input>
                </div>
                <div className="relative flex justify-center items-center gap-5
                mt-5">
                    <Link to="/" className="border border-white py-1 px-5
                    flex justify-center items-center rounded-full hover:bg-white
                    hover:text-black transition-all duration-300 ease-in-out">Back</Link>
                    <button type="submit" className="relative flex justify-center
                    items-center border border-(--tertiary-colour) py-1 px-5 
                    rounded-full hover:bg-(--tertiary-colour) transition-colors
                    duration-300 ease-in-out hover:text-(--primary-colour)">Login</button>
                </div>
            </form>
        </div>
    );
}

export default function LoginComponent() {
    return (
        <> 
            <LoginForm />
            <Dots />
        </>
    );
}