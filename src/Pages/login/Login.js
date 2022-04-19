import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
      const emailRef = useRef('');
      const passwordRef = useRef('');
      const navigate = useNavigate();
      const location = useLocation();

      let from = location?.state?.from?.pathname || '/';
      let errorElement;

      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      const resetPassword = async () => {
            const email = emailRef.current.value;
            if (email) {
                  await sendPasswordResetEmail(email);
                  toast('Sent email');
            }
            else {
                  toast('please enter your email address')
            }
      }

      if (loading || sending) {
            return <Loading></Loading>
      }
      if (user) {
            navigate(from, { replace: true })
      }
      if (error) {

            errorElement = <p className='text-danger'>Error: {error?.message}</p>



      }

      const handleSubmit = event => {
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;

            signInWithEmailAndPassword(email, password);
      }
      const navigateRegister = event => {
            navigate('/register');
      }


      return (
            <div className='container w-50 mx-auto'>
                  <h3 className='text-primary m-3'>Please Login</h3>
                  <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                              <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                              <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                              </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                              <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                              <Form.Text className="text-muted">
                                    We'll never share your password with anyone else.
                              </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Submit
                        </Button>
                  </Form>
                  {errorElement}
                  <p className='mt-5'>New to ANYTIME FITNESS ? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                  <p className='mt-5'>Forget Password ? <button className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                  <SocialLogin></SocialLogin>
                  <ToastContainer />
            </div>
      );
};

export default Login;