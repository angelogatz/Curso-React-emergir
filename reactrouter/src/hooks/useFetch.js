import { useState, useEffect } from "react";

//Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    //Refatorando POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    //Empty State

    const [loading, setLoading] = useState(false)

    //tratando erros
    const [error, setError] = useState(null)

    //delete car
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            setMethod(method);
        } else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setMethod(method);
            setItemId(data);
        }
    };

    useEffect(() => {
        const fetchData = async () => {

            //loading emptystate
            setLoading(true);

            try{

                const res = await fetch(url);
                const data = await res.json();

                setData(data);

            }catch(error){
                console.log(error.message);

                setError(
                    <div className="warning">
                        <p>"houve algum erro ao carregar o fetch"</p>
                    </div>
                );
            }

            setLoading(false);
        }

        fetchData();
    }, [url, callFetch]);

    //Refatorando POST
    useEffect(() => {
        const httpRequest = async () => {

            let json

            if(method === "POST"){
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                json = await res.json();
    
                setCallFetch(json)
            } else if (method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                json = await res.json();
            }

            setCallFetch(json)
        };

        httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading, error };
}