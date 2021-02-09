import React, { useState, useEffect } from 'react';

import {Modal, Button, Form} from "react-bootstrap"


function MyModal(props) {

    let {selectedRow, show, closeModal, updateName, saveChanges} = props;

    return (
        <>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <Form.Group >
                        <Form.Control style={{display: "none"}}
                                      type="text"
                                      onChange={updateName}
                                      value={selectedRow.id}
                                      placeholder="name input"/>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="text"
                                      onChange={updateName}
                                      value={selectedRow.name}
                                      placeholder="name input"/>
                    </Form.Group>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                            onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary"
                            onClick={ saveChanges }>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default MyModal;