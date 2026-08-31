import { useState } from "react";

export default function useRegister() {
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(false);

    const registerUser = async (email, password, username, firstName, lastName) => {
        setLoading(true);
        
        try {
            const response = await fetch("http://127.0.0.1/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "username": username,
                    "first-name": firstName,
                    "last-name": lastName
                }),
                credentials: "include"
            });

            const data = response.json();

            if (!response.ok) {
                throw new Error (
                    `Response error with ${email}, ${password}, ${firstName},
                    and ${lastName}.`
                )
            }

            if (response.status === "Error") {
                throw new error("User could not be registered");
            }

            if (!data) {
                throw new error("Registratoin failed.");
            }
        
            return true;

        } catch (error) {
            setError(true);
            console.log(error.message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { error, loading, registerUser };
}