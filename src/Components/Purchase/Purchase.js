import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Purchase = () => {
    const { serviceId } = useParams();
     const [service, setService] = useState({})
    useEffect(() => {
      fetch(`http://localhost:5000/products/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
           
         <h4>Engine name: {service?.name}</h4>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service?.img} />
  <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
    <Card.Text>
      {service?.description}
    </Card.Text>
<button className="btn btn-warning">Order Now</button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Purchase;