import React from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import './Cart.css'


const Cart = ({ service }) => {
      const { id, name, img, description, price } = service;
      const navigate = useNavigate();

      const navigateToServiceDetails = id => {
            navigate(`/service/${id}`);
      }

      return (
            <div className='cart'>
                  <img className='w-100' src={img} alt="" />
                  <h3>{name}</h3>
                  <h4>Price $ {price}</h4>
                  <p>{description}</p>
                  <button onClick={() => navigateToServiceDetails(id)} className='btn-primary'>Booking:{name}</button>
            </div>
      );
};

export default Cart;