import React from 'react';
import google from '../../../components/image/google.png'
// import facebook from '../../../components/image/facebook.png'
import github from '../../../components/image/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

const SocialLogin = () => {
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

      const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

      const navigate = useNavigate();
      let errorElement;

      if (error || error1) {

            errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

      }
      if (loading || loading1) {
            return <Loading></Loading>
      }
      if (user || user1) {
            navigate('/')
      }

      return (
            <div>
                  <div className='d-flex align-items-center'>
                        <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                        <p className='mt-2 px-3'>or</p>
                        <div style={{ height: '2px' }} className='bg-primary w-50'></div>

                  </div>
                  {errorElement}
                  <div>
                        <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 my-3'>
                              <img style={{ width: '30px' }} src={google} alt="" />
                              <span className='px-3'>Google Sign In</span>
                        </button>
                  </div>
                  {/* <div>
                        <button className='btn btn-info w-50 my-3'>
                              <img style={{ width: '30px' }} src={facebook} alt="" />
                              <span className='px-3'>Facebook Sign In</span>
                        </button>
                  </div> */}
                  <div>
                        <button onClick={() => signInWithGithub()} className='btn btn-info w-50'>
                              <img style={{ width: '30px' }} src={github} alt="" />
                              <span className='px-3'>Github Sign In</span>
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;