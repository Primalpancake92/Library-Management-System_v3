import { Route, Routes } from "react-router-dom";
import Account from "../pages/Account";
import Borrow from "../pages/Borrow";
import Return from "../pages/Return"
import Home from "../pages/Home";
import Hero from "../pages/Hero";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/account" element={<Account />} />
            <Route path="/home" element={<Home />} />
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/return" element={<Return />} />
        </Routes>
    )
}