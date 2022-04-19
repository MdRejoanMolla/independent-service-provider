import React from 'react';
import Banner from '../Banner/Banner';
import HelpFor from '../HelpFor/HelpFor';
import Service from '../Services/Service';
import './Home.css'

const Home = () => {
      return (
            <div className='home'>
                  <Banner></Banner>
                  <Service></Service>
                  <HelpFor></HelpFor>
            </div>
      );
};

export default Home;