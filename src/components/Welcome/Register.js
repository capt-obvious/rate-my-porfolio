import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const styleLocationLabel = {
    fontSize: 14,
    margin: "4px 0",
    color: "#8294AA"
  };

  const styleCardContent = {
    padding: "4px 16px 20px 16px"
  };

  const homeButton = {
    background: 'navy',
    borderRadius: '6px',
    color: 'white',
    textAlign: 'center',
    padding: '5px',
    fontSize: '1rem'
  };

function Register({ errors, touched, values, status }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log('status has changed', status);
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div style={styleCardContent} className='formik-form'>
            <Form style={styleCard}
                height='medium'
                justify='center'
                align='center'
                pad='xlarge'
                background='navy'
                round='medium'>
                    <div>
                        {touched.email && errors.email && <p>{errors.email}</p>}
                        <Field 
                            id='email'
                            type='email'
                            placeholder='email'
                            name='email'
                        />  
                    </div>
                    <div>
                        {touched.password && errors.password && <p>{errors.password}</p>}
                        <Field 
                            id='password'
                            type='password'
                            placeholder='password'
                            name='password'
                        />
                    </div>
                    <label htmlFor='terms-of-service'>
                        <Field
                            style={styleLocationLabel} 
                            name='tos' 
                            type='checkbox' 
                            checked={values.tos} 
                        />
                    </label>
                    <button style={homeButton} type='submit'>Register</button>
                </Form>
                {users.map(user => (
                    <ul key={user.id}>
                        <li>name: {user.name}</li>
                        <li>email: {user.email}</li>
                    </ul>
                ))}
        </div>


    );
};

const FormikNewForm = withFormik ({
    mapPropsToValues({ name, email, password, tos }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('*enter valid email address')
            .required('*email is required'),
        password: Yup.string()
            .min(6, '*password must be 6 characters')
            .required('*password is required'),
        tos: Yup.boolean().oneOf([true], '*please accept terms of service')
    }),

    handleSubmit(values, { resetForm, setStatus, setErrors }) {
        if (values.email === 'eiancarter@gmail.com') {
            setErrors({ email: '*user already registered'})
        } else { 
            axios
                .post('https://reqres.in/api/users', values)
                .then(res => {
                    console.log('success', res);
                    resetForm();
                    setStatus(res.data)
                })
                .catch(err => {
                    console.log(err);
                    setStatus(false);
                })
        }
    }
})(Register);

export default FormikNewForm;