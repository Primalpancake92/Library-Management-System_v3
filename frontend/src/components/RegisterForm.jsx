import Field from "./Field";
import useForm from "../Hooks/useForm";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm({ loading, error, registerUser }) {
    const { formValues, handleChange } = useForm({
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const navigate = useNavigate();

    const submit = async (event) => {
        event.preventDefault();

        const register = registerUser(formValues);

        if (register) {
            navigate("/login");
        }
    };

    return (
        <form onSubmit={submit} className="flex flex-col border border-white
            p-15 rounded-3xl">
            <div className="relative flex justify-center items-center 
            gap-7">
                <div className="relative flex flex-col"> 
                    <Field label={"First name"} name={"firstName"} type={"text"}
                    value={formValues.firstName} onChange={handleChange} />
                </div>
                <div className="relative flex flex-col">
                    <Field label={"Last name"} name={"lastName"} type={"text"}
                    value={formValues.lastName} onChange={handleChange} /> 
                </div>
            </div>
            <Field label={"Email"} name={"email"} type={"email"} 
            value={formValues.email} onChange={handleChange}/>
            <Field label={"Username"} name={"username"} type={"text"}
            value={formValues.username} onChange={handleChange} />
            <Field label={"Password"} name={"password"} type={"password"}
            value={formValues.password} onChange={handleChange}/>
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
    );
} 