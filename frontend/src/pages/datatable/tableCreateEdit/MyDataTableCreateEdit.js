import React, { useState, useEffect } from 'react';

import MaterialTable from "material-table";

// import axios from "axios"
// import {Modal, TextField, Button} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';

import './Style.css';

import Api from "../../../services/api"
const api = new Api();


function MyDataTableCreateEdit() {

    const [rows, setRows] = useState();

    const columns = [
        {
            title: 'Id',
            field: 'id',
        },
        {
            title: 'Name',
            field: 'name',
        },
    ]

    useEffect(() => {

        async function fetchMyAPI() {

            let rows = await api.getItens();

            console.log("rows:", rows)
            setRows(rows);
        }

        fetchMyAPI()

    }, []);


    const disableRow = (event, rowData)=>{

        console.log("event ", event);
        console.log("rowData ", rowData);
    }

    const editRow = (event, rowData)=>{

        console.log("event ", event);
        console.log("rowData ", rowData);
    }

    return (
        <div className="App">
            <br />

            {JSON.stringify(rows)}
            {/*<Button onClick={ ()=>{abrirCerrarModalInsertar()} }>Insertar Artista</Button>*/}

            <br/> <br/>
            <MaterialTable
                columns={columns}
                data={rows}
                title="titulo"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: editRow
                    },
                    {
                        icon: 'disable',
                        tooltip: 'disable',
                        onClick: disableRow
                    }
                ]}
                options={{
                    actionsColumnIndex: -1,
                }}
                localization={{
                    header:{
                        actions: "Ações"
                    }
                }}
            />

        </div>
    );
}

export default MyDataTableCreateEdit;