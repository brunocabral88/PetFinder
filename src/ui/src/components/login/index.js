import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import PetFinderAPI from '../../apis/pet-finder-api';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = () => {
        console.log(PetFinderAPI.defaults.baseURL);
    }

    return (
        <Container>
            <Form>
                <Form.Group controlId="formLoginEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formLoginPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text># </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    </InputGroup>
                </Form.Group>

                <Button type="submit" onClick={submitLogin}>SUBMIT</Button>
            </Form>
        </Container>
    );
};

export default LoginPage;
