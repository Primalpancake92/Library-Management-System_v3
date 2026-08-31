import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "../Hooks/useRegister";
import Dots from "../components/Dots";

function RegisterForm() {
    const { error, loading, registerUser } = useRegister();
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

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
            <form onSubmit={submit} className="flex flex-col border border-white
            p-15 rounded-3xl">
                <div className="relative flex justify-center items-center 
                gap-7">
                    <div className="relative flex flex-col"> 
                        <label className="relative">First Name:</label>
                        <input type="text" onChange={handleChange} 
                        value={formData.firstName} className="relative 
                        rounded-2xl">
                        </input>
                    </div>
                    <div className="relative flex flex-col"> 
                        <label>Last Name:</label>
                        <input type="text" onChange={handleChange}
                        value={formData.lastName} className="relative 
                        rounded-2xl"></input>
                    </div>
                </div>
                <label>Email:</label>
                <input type="email" onChange={handleChange}
                value={formData.email} className="relative rounded-2xl"></input>
                <label>Username:</label>
                <input type="string" onChange={handleChange}
                value={formData.username} className="relative rounded-2xl"></input>
                <label>Password:</label>
                <input type="password" onChange={handleChange}
                value={formData.password} className="relative rounded-2xl"></input>
                <div className="relative flex justify-center items-center
                gap-5 mt-8">
                    <Link className="relative flex justify-center 
                    items-center text-white border border-white
                    px-5 py-1 rounded-3xl" to="/">Back</Link>
                    <button className="relative flex items-center 
                    justify-center text-white border border-white
                    px-5 py-1 rounded-3xl hover:bg-(--secondary-colour)
                    transition-all duration-300 ease-in-out"
                    type="submit"
                    >Register</button>
                </div>
            </form>
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