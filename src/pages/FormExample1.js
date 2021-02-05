
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import {useState} from "react";


function FormExample1() {

    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    let updateEmail = ({target:{value}}) => {
        setEmail(value);
    }

    let updatePassword = ({target:{value}}) => {
        setPassword(value);
    }


    return (
        <div style={{margin: "80px"}}>

            <h1>
                {email}
            </h1>
            <h1>
                {password}
            </h1>

            <Form>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  onChange={updateEmail}
                                  value={email}
                                  placeholder="Enter email" />

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  onChange={updatePassword}
                                  value={password}
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

export default FormExample1;

