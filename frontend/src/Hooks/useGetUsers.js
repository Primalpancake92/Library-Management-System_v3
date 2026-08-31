import { useState, useEffect } from "react";

function useGetUsers (apiEndpoint) {
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(async () => {
        const response = await fetch();

        if (!response.ok) {
            console.log("There was no response from the endpoint.");
            return;
        }

        
    });
}