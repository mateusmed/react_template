
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import {useState} from "react";

function UploadFile() {

    let [formData, setFormData] = useState();
    let [file, setFile] = useState();
    let [response, setResponse] = useState();

    const onFormSubmit = (event) => {

        const formData = new FormData(event.target);
        event.preventDefault()
        let formDataObj = Object.fromEntries(formData.entries())
        setFormData(formDataObj);
        console.log("formData", formData);

        sendFileBackend();
    }

    const sendFileBackend = async () => {

        console.log("file -> ", file.name);
        // mandando mais de uma informação
        let data = new FormData()
        data.append('myFile', file)
        data.append('user', 'hubot')

        let  response = await fetch('http://localhost:8080/upload-avatar', {
            method: 'POST',
            body: data
        })

        let content = await response.json();
        setResponse(content);
    }

    const updateFile = (event) => {
        // handle validations
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);
    }

    return (
        <div style={{margin: "80px"}}>

            <h1>
                {JSON.stringify(response)}
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

