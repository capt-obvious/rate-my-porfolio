import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = props => {
  const initialState = { username: '', password: '' }
  const reducer = (state, action) => {
    if (!state || !action) return initialState
    return { ...state, ...action }
  }
  const [credentials, setCredentials] = React.useReducer(reducer, initialState)
  const handleLogin = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:3300/api/auth/login", credentials)
      .then(res => {
      console.log(res);
      })
      .catch(err => {
      console.log(err);
      });
  }

  const onChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setCredentials({ [name]: value })
    console.log(credentials);
  }

  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input type="text" name="username" id="exampleUsername" placeholder="username" value={credentials.username} onChange={onChange} />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input type="password" name="password" id="examplePassword" placeholder="password" value={credentials.password} onChange={onChange} />
      </FormGroup>
      <Button onClick={handleLogin}>Submit</Button>
    </Form>
  );
};

export default Login;
