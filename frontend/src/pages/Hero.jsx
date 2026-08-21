import Dots from "../components/Dots";
import { Link } from "react-router-dom";

function WelcomeBtn() {
    return (
        <Link to="/login">Welcome</Link>
    );
}

function WelcomeTitle({ libraryName }) {
    return (
        <div className="relative w-full h-screen z-100 flex flex-col 
        justify-center items-center">
            <div className="relative flex items-center gap-5">
                <div className="relative w-21 h-21 flex rounded-2xl
                justify-center items-center bg-linear-to-br from-(--tertiary-colour)
                via-blue-300 to-(--secondary-colour)">
                    <h1 className="text-3xl text-(--primary-colour) font-semibold">LC</h1>
                </div>
                <div className="relative border border-l border-white h-25"></div>
                <div className="relative flex flex-col gap-5">
                    <h1 className="text-white text-5xl">Welcome to {libraryName}</h1>
                    <p className="relative text-white text-xl">
                        The library that is a touch away.
                    </p>
                </div>
                <WelcomeBtn />
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <div>
            <WelcomeTitle libraryName="LibraCore"/>
            <Dots />
        </div>
    );
}