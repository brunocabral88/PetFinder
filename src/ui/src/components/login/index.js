import React, { useState, useContext } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import loginService from "../../services/loginService";
import { useHistory } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [validated, setValidated] = useState(false);
    const history = useHistory();
    const authContext = useContext(AuthContext);

    const submitLogin = async (event) => {
        event.stopPropagation();
        event.preventDefault();

        const form = event.currentTarget;
        setValidated(true);

        if (!form.checkValidity()) return;

        const loginSuccess = await loginService.login(email, password);

        if (loginSuccess) {
            authContext.setIsLoggedIn(true);
            history.push('/');
        } else {
            setErrorMessage('Invalid credentials provided');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    }

    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={submitLogin}>
                {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}

                <Form.Group controlId="formLoginEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            required
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please provide your e-mail</Form.Control.Feedback>
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
                            required
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please provide your password</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Button type="submit">SUBMIT</Button>
            </Form>
        </Container>
    );
};

export default LoginPage;
