
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import {useState} from "react";

function UploadFile() {

    let [formData, setFormData] = useState();
    let [sectedFile, setSelectedFile] = useState();

    const onFormSubmit = (event) => {

        const formData = new FormData(event.target);
        event.preventDefault()
        let formDataObj = Object.fromEntries(formData.entries())
        setFormData(formDataObj);
        console.log("formData", formData);
    }

    const updateFile = (event) => {
        // handle validations
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0].name);
    }

    return (
        <div style={{margin: "80px"}}>

            <h1>
                {JSON.stringify(sectedFile)}
            </h1>

            <Form onSubmit={onFormSubmit}>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1"
                               label="Example file input"
                               onChange={updateFile}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
}

export default UploadFile;

