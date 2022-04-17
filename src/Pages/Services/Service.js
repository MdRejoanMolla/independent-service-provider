import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import './Service.css'

const Service = () => {
      const [services, setServices] = useState([]);
      useEffect(() => {
            fetch("data.json")
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])

      return (
            <div>
                  <h1 className='text-primary'>Our Services</h1>
                  <div className='service-container'>
                        {
                              services.map(data => <Cart key={data.id} service={data}></Cart>)
                        }
                  </div>

            </div>
      );
};

export default Service;