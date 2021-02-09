import React, { useState, useEffect } from 'react';

import './App.css';


import MyModal from "./modal/MyModal";

import MaterialTable from "material-table";

import './icons.css';

import Api from "../../../services/api"
import {Button} from "react-bootstrap";
const api = new Api();


// icones: https://material.io/resources/icons/?icon=check_circle_outline&style=baseline

// informação importante para experiencia.
// não importa quantos componentes 'filhos' vc tiver,
// a forma mais inteligente de se fazer isso
// é ter um centralizador dos estados e geralmente esse centralizador é o pai
// também não concordo, uma vez q determinadas ações deveriam ser responsabilidades dos componenetes
// aqui no nosso examplo, abrir e fechar um modal
// o pai consegue chamar metodos dos componentes filhos,
// POREM dizem q chamar um metodo de "filho" é uma coisa ruim,
function MyDataTableCreateEdit() {

    let defaultData = {
        "id": "",
        "name": ""
    }

    // TABLE
    //=======================================================
    const [rows, setRows] = useState();
    const [selectedRow, setSelectedRow] = useState(defaultData);
    //=======================================================


    //MODAL
    //=======================================================
    const [show, setShow] = useState(false);

    const updateName = (event) => {

        console.log(event.target)

        let value = event.target.value;

        let newData = {
            id: selectedRow.id,
            name : value
        }

        setSelectedRow(newData);

        console.log("updateNameState -> ", selectedRow);
    }

    const saveChanges = async () => {

        console.log("before save -> ", selectedRow)

        let response =  await api.postItem(selectedRow);

        console.log("after save -> ", response)
        closeModal();
    }


    const closeModal = () => { setShow(false); }
    const openModal = () => { setShow(true); }
    //=======================================================


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

        let selectedData = {
            "id": rowData.id,
            "name": rowData.name
        }

        setSelectedRow(selectedData);
        openModal();
    }

    return (

        <div style={{margin: "30px"}}>
            <br />

            {/*{JSON.stringify(rows)}*/}
            {/*{JSON.stringify(openModal)}*/}

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <Button variant="primary" onClick={openModal}>
                            Novo Item
                        </Button>
                    </div>
                </div>
            </div>

            <MyModal selectedRow={selectedRow}
                     show={show}
                     closeModal={closeModal}
                     updateName={updateName}
                     saveChanges={saveChanges}/>

            <br/> <br/>

            <MaterialTable
                columns={[
                    {
                        title: 'Id',
                        field: 'id',
                    },
                    {
                        title: 'Name',
                        field: 'name',
                    },
                ]}
                data={rows}
                title="titulo"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: editRow
                    },
                    {
                        icon: 'swap_horiz',
                        tooltip: 'enable / disable',
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