import { useEffect, useState } from "react"

export const useAuthentication = (url) =>{

    const [data]= useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);

    const[callFetch, setCallFetch] = useState(false);

    const httpConfig = (data, method) =>{
         if(method === "POST"){
            setConfig({
                method,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            setMethod(method);
        }
    }

     useEffect(()=>{
        const httpRequest = async () =>{
            if(method === 'POST'){
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);

                const json = await res.json();

                setCallFetch(json)
            }
        }
        httpRequest();
    }, [config, method, url, callFetch])

    return {data, httpConfig}
}