import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Explore = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sheltered-escarpment-17435.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    const handleAddToCart = (index) => {
        const data = (services[index]);
        data.email = (user.email);
        data.status = "Pending"
       
        fetch(`https://sheltered-escarpment-17435.herokuapp.com/addOrder`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
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
      {service?.description.slice(0, 250)}
                                    </Card.Text>
                                     <Card.Text>
      <h4>TK: {service?.price}</h4>
    </Card.Text>
<Link to={`/purchase/${service?._id}`}><button onClick={() =>handleAddToCart(index)} className="btn btn-warning">Order Now</button></Link>
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