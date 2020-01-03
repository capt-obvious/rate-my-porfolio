import React, { Component, useState, useEffect } from "react";

<<<<<<< HEAD
import axios from "axios";
=======
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
      validate: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }
>>>>>>> 4953549c7335d7247b7f215720d05d84447088e5

const Register = () => {
  const [creds, setCreds] = React.useState({});

<<<<<<< HEAD
  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
=======
  async handleChange (event) {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value
>>>>>>> 4953549c7335d7247b7f215720d05d84447088e5
    });
  };
};

<<<<<<< HEAD
const handleSubmit = (e) => {
  e.preventDefault(); 
  axios.
=======
  submitForm(e) {
    e.preventDefault();
    const { validate, email, address, ...restState } = this.state
    axios
      .post("http://localhost:3300/api/auth/register", restState)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

    render() {
        const { username, email, password, address, city, country } = this.state;
        return (
        <Form className='registerStyle' onSubmit={ (e) => this.submitForm(e) }>
            <Row form>
            <Col md={2}>
                <FormGroup>
                    <Label for="exampleName">Username</Label>
                    <Input 
                        type="username" 
                        name="username" 
                        id="exampleName" 
                        placeholder="username" 
                        value= { username }
                        onChange={ (e) => this.handleChange(e) }
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="examplePassword" 
                        placeholder="password" 
                        value = { password }
                        onChange={ (e) => this.handleChange(e) }
                    />
                </FormGroup>
            </Col>
            <Col md={2}>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input 
                        valid type="email" 
                        name="email" 
                        id="exampleEmail" 
                        placeholder="email" 
                        value= { email }
                        valid={ this.state.validate.emailState === 'has-success' }
                        invalid={ this.state.validate.emailState === 'has-danger' }
                        onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                        } }
                    />
                    <FormFeedback invalid>*please enter a valid email</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Confirm Password</Label>
                    <Input 
                        type="password" 
                        name="password" 
                        id="examplePassword" 
                        placeholder="password" 
                        value = { password }
                        onChange={ (e) => this.handleChange(e) }
                    />
                </FormGroup>
            </Col>
            </Row>
            <Row form>
            </Row>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="1234 Main St"
              value={address}
              onChange={ (e) => this.handleChange(e) }
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input
              type="text"
              name="address2"
              id="exampleAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>
        </Col>
        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input
                type="city"
                name="city"
                id="exampleCity"
                placeholder="San Francisco"
                value={city}
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input
                type="text"
                name="state"
                id="exampleState"
                placeholder="CA"
              />
            </FormGroup>
          </Col>
          <Col md={1}>
            <FormGroup>
              <Label for="exampleCountry">Zip</Label>
              <Input
                type="text"
                name="country"
                id="exampleCountry"
                placeholder="country"
                value={country}
                onChange={e => this.handleChange(e)}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck" />
          <Label for="exampleCheck" check>
            Terms of Service
          </Label>
        </FormGroup>
        <Button>Sign in</Button>
    </Form>
    );
  }
>>>>>>> 4953549c7335d7247b7f215720d05d84447088e5
}
