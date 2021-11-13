import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './ManageProducts.css';

const ManageProducts = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sheltered-escarpment-17435.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleDelete = id => {
        const url = `https://sheltered-escarpment-17435.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                const remaining = services.filter(service =>service._id !== id)
                setServices(remaining)
                }
                
        })
    }
    return (
       <div className="manage">
            <h2>Manage Products</h2>
            <div className="manage-container">
                   {
                services.map(service => <div key={service._id}>
                    
                    <Card border="primary" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service.img} />
  <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
    <Card.Text>
      {service?.description.slice(0, 200)}
    </Card.Text>
    <Card.Text>
    <h2>Tk:   {service?.price}</h2>
    </Card.Text>
    <Button onClick={() =>handleDelete(service._id)} variant="primary">Delete</Button>
  </Card.Body>
</Card>
                </div>)
            }
         </div>
        </div>
    );
};

export default ManageProducts;