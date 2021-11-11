import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Explore = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    const handleAddToCart = (index) => {
        const data = (services[index]);
        data.email = (user.email);
        data.status = "Pending"
       
        // fetch(`http://localhost:5000/addOrder`, {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data)
        // })
    }
    return (
        <div id="services">
            <h2>Best Sunglass</h2>
            <div className="service-container">
                {
                    services.map((service, index)=> (
                        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service?.img} />
  <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
    <Card.Text>
      {service?.description.slice(0, 150)}
    </Card.Text>
<button onClick={() =>handleAddToCart(index)} className="btn btn-warning">Order Now</button>
  </Card.Body>
</Card>
        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Explore;