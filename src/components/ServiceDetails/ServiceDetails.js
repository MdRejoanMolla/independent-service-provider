import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetails = () => {
      const { serviceId } = useParams();
      return (
            <div>
                  <h4>service details {serviceId}</h4>
                  <div>
                        <Link to='/checkout'>
                              <button className='btn btn-primary'> Proceed Checkout</button>
                        </Link>
                  </div>
            </div>
      );
};

export default ServiceDetails;