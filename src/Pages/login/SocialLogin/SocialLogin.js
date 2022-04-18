import React from 'react';
import google from '../../../components/image/google.png'

const SocialLogin = () => {
      return (
            <div>
                  <div className='d-flex align-items-center'>
                        <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                        <p className='mt-2 px-3'>or</p>
                        <div style={{ height: '2px' }} className='bg-primary w-50'></div>

                  </div>
                  <div>
                        <button className='btn btn-primary w-50'>
                              <img style={{ width: '30px' }} src={google} alt="" />
                              <span className='px-3'>Google Sign In</span>
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;