import { useState, useEffect } from "react";

export default function useRegister({email, password, firstName, lastName}) {
    const [ loading, setLoading ] = useState(null);
    const [ error, setError ] = useState(false);

    const registerUser = async (email, password, firstName, lastName) => {
        setLoading(true);
        
        try {
            const response = await fetch("http://127.0.0.1/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: {
                    "email": email,
                    "password": password,
                    "first-name": firstName,
                    "last-name": lastName
                }
            })
x
            const data = await response.json();

            if (!response.ok) {
                throw new Error (
                    `Response error with ${email}, ${password}, ${firstName},
                    and ${lastName}.`
                );
            }

        } catch (error) {
            setError(true);
            console.log(error.message);
        }

        setLoading(false);
    };

    registerUser()
}