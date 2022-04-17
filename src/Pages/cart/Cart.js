import React from 'react';
import './Cart.css'


const Cart = ({ service }) => {
      const { name, img, description, price } = service;
      return (
            <div className='cart'>
                  <img src={img} alt="" />
                  <h3>{name}</h3>
                  <h4>Price $ {price}</h4>
                  <p>{description}</p>
                  <button className='btn-primary'>Booking:{name}</button>
            </div>
      );
};

export default Cart;