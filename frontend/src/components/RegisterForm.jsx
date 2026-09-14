import Field from "./Field";
import useForm from "../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import FormActions from "./FormActions";

export default function RegisterForm({ error, loading, registerUser }) {
    const { formValues, handleChange } = useForm({
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const register = async () => {
        await registerUser(
            formValues.email,
            formValues.password,
            formValues.username,
            formValues.firstName,
            formValues.lastName
        );
    };

    return (
        <form onSubmit={register} className="flex flex-col border border-white
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
            <FormActions backTo={"/login"} submitText={"Register"} />
        </form>
    );
} 