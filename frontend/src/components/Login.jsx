import { Link } from "react-router-dom";
import Dots from "./Dots";

function LoginForm() {
    return (
        <div className="relative flex w-full h-screen justify-center items-center
        z-11">
            <form className="flex flex-col p-2.5 text-white border 
            border-white w-150 h-120 rounded-3xl justify-center items-center">
                <div className="flex flex-col items-center">
                    <label className="float-left">Email</label>
                    <input placeholder="john.smith@email.com" type="email"></input>
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <div className="relative flex justify-center items-center gap-5
                mt-5">
                    <Link to="/" className="border border-white py-1 px-5
                    flex justify-center items-center rounded-full hover:bg-white
                    hover:text-black transition-all duration-300 ease-in-out">Back</Link>
                    <button type="submit">Login</button>
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