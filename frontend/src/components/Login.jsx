import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Dots from "./Dots";

function LoginForm() {
    const navigate = useNavigate();
    const { loginUser, error, loading, user } = useAuth();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const login = await loginUser(email, password);

        if (login) {
            navigate("/home");
        }
    };

    return (
        <div className="relative flex w-full h-screen justify-center items-center
        z-11">
            <form className="flex flex-col p-2.5 text-white border
            border-white w-150 h-120 rounded-3xl justify-center items-center"
            onSubmit={handleSubmit}>
                <div className="flex flex-col items-center gap-5">
                    <label className="text-lg">Email</label>
                    <input placeholder="john.smith@email.com" type="email"
                    className="px-3 py-1 rounded-full focus:border-blue-500"
                    value={email} onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <label className="text-lg">Password</label>
                    <input type="password" placeholder="Enter here" className="
                    rounded-full border border-white px-3 py-1" 
                    value={password} onChange={(e) => setPassword(
                        e.target.value
                    )}>
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
                    duration-300 ease-in-out hover:text-(--primary-colour)">
                        Login
                    </button>
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