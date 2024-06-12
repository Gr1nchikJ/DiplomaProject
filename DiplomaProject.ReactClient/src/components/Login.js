import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberme, setRememberme] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === "checkbox") {
            setRememberme(checked);
        } else {
            if (name === "email") setEmail(value);
            if (name === "password") setPassword(value);
        }
    };

    const handleRegisterClick = () => {
        navigate("/register");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
        } else {
            setError("");
            const loginurl = rememberme ? 
                "https://localhost:7271/login?useCookies=true" : 
                "https://localhost:7271/login?useSessionCookies=true";

            fetch(loginurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
            .then((data) => {
                if (data.ok) {
                    setError("Successful Login.");
                    window.location.href = '/';
                } else {
                    setError("Error Logging In.");
                }
            })
            .catch((error) => {
                console.error(error);
                setError("Error Logging in.");
            });
        }
    };

    return (
        <Container>
            <Box>
                <Title>Login</Title>
                <form onSubmit={handleSubmit}>
                    <div className="p-field">
                        <label htmlFor="email">Email:</label>
                        <InputText
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="p-field">
                        <label htmlFor="password">Password:</label>
                        <Password
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            required
                            feedback={false}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="p-field-checkbox" style={{margin: '5px 0'}}>
                        <Checkbox
                            inputId="rememberme"
                            name="rememberme"
                            checked={rememberme}
                            onChange={handleChange}
                        />
                        <label htmlFor="rememberme">Remember Me</label>
                    </div>
                    <Button type="submit" label="Login" className="p-mt-2 mr-2" />
                    <Button type="button" label="Register" className="p-button-secondary p-mt-2" onClick={handleRegisterClick} />
                </form>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </Box>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f5f5f5;
`;

const Box = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
`;

export default Login;
