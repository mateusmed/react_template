import {useEffect, useState} from "react";
import { MDBDataTableV5 } from 'mdbreact';

import Api from "../../services/api"
const api = new Api();

export default function SelectSearchTopReverse() {

    const [datatable, setDatatable] = useState();

    let table = {
        columns: [
            {
                label: 'Id',
                field: 'id',
                width: 150,
            },
            {
                label: 'Name',
                field: 'name',
                width: 150,
            },
        ],
        rows: [

        ],
    }

    useEffect(() => {

        async function fetchMyAPI() {
            let itens = await api.getItens();

            table["rows"] = itens;
            setDatatable(table);
        }

        fetchMyAPI()

    }, []);

    return (
        <div style={{margin: "30px"}}>

            {JSON.stringify(datatable)}

            <MDBDataTableV5
                hover
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable}
                pagingTop
                searchTop
                searchBottom={false}
                barReverse
            />
        </div>
    );
}


