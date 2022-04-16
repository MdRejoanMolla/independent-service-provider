import React from 'react';

const Footer = () => {
      const today = new Date();
      const year = today.getFullYear();
      return (
            <footer>
                  <p>copyright @ <span className="text-danger">{year}</span></p>
            </footer>
      );
};

export default Footer;