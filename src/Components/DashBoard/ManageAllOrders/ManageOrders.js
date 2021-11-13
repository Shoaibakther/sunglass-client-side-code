import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const ManageOrders = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://stormy-badlands-58007.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h2>Best Sunglass</h2>
            <div className="service-container">
                {
                    services.map((service, index)  => (
                        
                        <div>
                            
            <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service?.img} />
  <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
    <Card.Text>
      {service?.description.slice(0, 200)}
    </Card.Text>
    <Card.Text>
      <h4>TK: {service?.price}</h4>
    </Card.Text>
 <button className="btn btn-primary">{service?.status}</button>
<button className="btn btn-warning">Order Now</button>
  </Card.Body>
</Card>
        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageOrders;