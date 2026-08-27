import { useState, useEffect } from "react";

export default function useAuth() {
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ user, setUser ] = useState({});

    const loginUser = async (email, password) => {
        try {
            setLoading(true);

            const response = await fetch("http://127.0.0.1:3000/user/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        "email": email,
                        "password": password
                    }),
                    credentials: "include"
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error("User data unable to load.");
            }

            if (response.status === "Error") {
                throw new Error("Invalid user details entered.");
            }

            if (!data) {
                throw new Error(
                    `There are there no users with email ${email}`
                )
            }

            setUser(data);

            return true;
        } catch (error) {
            console.log(error.message);
            setError(true);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { loginUser, error, loading, user };
}