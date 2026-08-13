import { useState, useEffect } from "react";

function useGetUsers (apiEndpoint) {
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useStatue(true);
    const [ error, setError ] = useState(false);

    useEffect(async (apiEndpoint) => {
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            console.log("There was no response from the endpoint.");
            return;
        }

        
    });
}