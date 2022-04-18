import React from 'react';
import img from '../image/copyright.png'
import './Footer.css'

const Footer = () => {
      const today = new Date();
      const year = today.getFullYear();
      return (
            <footer className='m-3 bg-primary p-5' id='footer'>
                  <p>copyright  <img src={img} alt="" /> <span className="text-danger"> {year}</span></p>

            </footer>
      );
};

export default Footer;