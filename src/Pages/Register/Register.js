import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Register.css'
import SocialLogin from '../login/SocialLogin/SocialLogin';
import Loading from '../../components/Loading/Loading';


const Register = () => {
      const [agree, setAgree] = useState(false);
      const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

      const [updateProfile, updating, error1] = useUpdateProfile(auth);

      const navigate = useNavigate();
      const navigateLogin = event => {
            navigate('/login');
      }


      const handleRegister = async (event) => {
            event.preventDefault();
            const displayName = event.target.name.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            // const agree = event.target.terms.checked;

            await createUserWithEmailAndPassword(email, password, displayName);
            await updateProfile({ displayName });
            console.log('Updated profile');
            navigate('/')

      }
      if (loading || updating) {
            return <Loading></Loading>
      }




      return (
            <div className='register-form'>
                  <h3 className='text-primary m-3'>Please Register </h3>
                  <form onSubmit={handleRegister}>
                        <input type="text" name='name' id='1' placeholder='your name' />

                        <input type="email" name='email' id='2' placeholder='your email' required />

                        <input type="password" name='password' id='3' placeholder='your password' required />
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={agree ? "ps-2 text-primary" : 'ps-2 text-danger'} htmlFor="terms">Accept Anytime Fitness Terms and Conditions</label>

                        <input
                              disabled={!agree}
                              className='w-50 btn btn-primary mt-2 mx-auto' type="submit" value="Register" />
                  </form>

                  <p className='mt-5'>Already have an account ? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
                  <SocialLogin></SocialLogin>
            </div>
      );
};

export default Register;