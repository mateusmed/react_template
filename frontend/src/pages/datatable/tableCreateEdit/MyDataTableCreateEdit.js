import React, { useState, useEffect } from 'react';

import MaterialTable from "material-table";

// import axios from "axios"
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import './Style.css';

import Api from "../../../services/api"
const api = new Api();


function MyDataTableCreateEdit() {

    const [rows, setRows] = useState();

    const useStyles = makeStyles((theme) => ({
        modal: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        iconos:{
            cursor: 'pointer'
        },
        inputMaterial:{
            width: '100%'
        }
    }));


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

        <div style={{margin: "30px"}}>
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


            {/* init modal */}
            {/*<Modal open={true}*/}
            {/*       onClose={false}>*/}
            {/*    <div className={useStyles.modal}>*/}
            {/*        <h1>msg </h1>*/}

            {/*    </div>*/}
            {/*</Modal>*/}

        </div>
    );





}

export default MyDataTableCreateEdit;