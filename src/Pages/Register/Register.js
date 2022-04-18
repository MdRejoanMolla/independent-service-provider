import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
      const navigate = useNavigate();
      const handleRegister = event => {
            event.preventDefault();
            const name = event.target.name.value
            const email = event.target.email.value
            const password = event.target.password.value
      }

      const navigateLogin = event => {
            navigate('/register');
      }
      return (
            <div className='container w-50 mx-auto'>
                  <h3 className='text-primary m-3'>Please Register </h3>
                  <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="name" placeholder="Enter name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" required />
                              <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                              </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" required />
                              <Form.Text className="text-muted">
                                    We'll never share your password with anyone else.
                              </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                              Submit
                        </Button>
                  </Form>
                  <p className='mt-5 text-primary'>Already have an account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </div>
      );
};

export default Register;