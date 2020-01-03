import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = props => {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
<<<<<<< HEAD
        <Label for="exampleEmail" className="mr-sm-2">
          Email
        </Label>
        <Input
          type="text"
          name="user"
          id="exampleEmail"
          placeholder="username"
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="don't tell!"
        />
=======
        <Label for="exampleEmail" className="mr-sm-2"></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="email address" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2"></Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password" />
>>>>>>> david-francis
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default Login;
