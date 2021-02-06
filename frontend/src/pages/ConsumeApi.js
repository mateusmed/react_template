import React, {useEffect, useState} from "react";

import Api from "../services/api"
const api = new Api();

function Page1() {

    const [itemList, setItens] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        // strategy to use async function inside useEffect
        async function fetchMyAPI() {
            let itens = await api.getItens();
            setItens(itens);
        }

        fetchMyAPI()

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
            <h1> Consume API </h1>
            {JSON.stringify(itemList)}
        </div>
    );
}

export default Page1;