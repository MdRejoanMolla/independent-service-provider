import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'


const Register = () => {
      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const navigateLogin = event => {
            navigate('/login');
      }
      if (user) {
            navigate('/')
      }

      const handleRegister = event => {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;

            createUserWithEmailAndPassword(email, password);
      }


      return (
            <div className='register-form'>
                  <h3 className='text-primary m-3'>Please Register </h3>
                  <form onSubmit={handleRegister}>
                        <input type="text" name='name' id='' placeholder='your name' />

                        <input type="email" name='email' id='' placeholder='your email' required />

                        <input type="password" name='password' id='' placeholder='your password' required />
                        <input type="submit" value="Register" />
                  </form>

                  <p className='mt-5 text-primary'>Already have an account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            </div>
      );
};

export default Register;