import React from 'react';
import img from '../image/copyright.png'

const Footer = () => {
      const today = new Date();
      const year = today.getFullYear();
      return (
            <footer>
                  <p>copyright  <img src={img} alt="" /> <span className="text-danger"> {year}</span></p>

            </footer>
      );
};

export default Footer;