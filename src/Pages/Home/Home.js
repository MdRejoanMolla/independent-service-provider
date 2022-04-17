import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';
import './Home.css'

const Home = () => {
      return (
            <div className='home'>
                  <Banner></Banner>
                  <Service></Service>
            </div>
      );
};

export default Home;