
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import {useState} from "react";

// import {saveOrUpdate} from "../../database/service";



function FormExample2() {

    let [formData, setFormData] = useState();

    const onFormSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        let formDataObj = Object.fromEntries(formData.entries())

        // saveOrUpdate(formDataObj)

        setFormData(formDataObj);
    }

    return (
        <div style={{margin: "80px"}}>

            <h1>
                {console.log(formData)}
            </h1>
            <h1>
                {JSON.stringify(formData)}
            </h1>

            <Form onSubmit={onFormSubmit}>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  name="email"
                                  placeholder="Enter email" />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
}

export default FormExample2;

