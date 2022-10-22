import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('[Home.js] UseEffect rendering..');
        const abortController = new AbortController();
        fetch(url, {signal: abortController.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error("Couldn't fetch the data at Resource");
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                if(error.name === 'AbortError'){

                    return console.log('Fetch aborted...');
                }
                setError(error.message);
                setIsPending(false);
            })

            return ()=> {
                console.log('Clean up running...');
                abortController.abort();
            }
    }, [url]);

    return { data, isPending, error };
}


export default useFetch;