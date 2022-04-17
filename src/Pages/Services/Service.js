import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';

const Service = () => {
      const [services, setServices] = useState([]);
      useEffect(() => {
            fetch("data.json")
                  .then(res => res.json())
                  .then(data => setServices(data))
      }, [])

      return (
            <div>
                  <h1>Our Services {services.length}</h1>
                  {
                        services.map(data => <Cart key={data.id} service={data.service}></Cart>)
                  }
            </div>
      );
};

export default Service;