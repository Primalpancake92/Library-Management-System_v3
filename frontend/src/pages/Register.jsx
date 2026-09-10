import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "../Hooks/useRegister";
import Dots from "../components/Dots";

function RegisterForm() {
    const { error, loading, registerUser } = useRegister();
    const navigate = useNavigate();


    const submit = async (event) => {
        event.preventDefault();

        const register = await registerUser(
            formData.email, formData.password, formData.username, 
            formData.firstName, formData.lastName
        );

        if (register) {
            navigate("/login");
        }
    };

    return (
        <div className="relative w-full h-screen flex flex-col justify-center 
        items-center">
            
        </div>
    );
}

export default function Register() {
    return (
        <div>
            <RegisterForm />
        </div>
    );
}