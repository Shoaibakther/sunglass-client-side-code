import Button from '@restart/ui/esm/Button';
import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
        const email = (user.email);
   
   

    
    useEffect(() => {
        fetch(`https://stormy-badlands-58007.herokuapp.com/myOrders/${email}`)
        .then(res =>res.json())
        .then(data => setOrders(data))
    }, [])
    
    
     const handleDelete = id => {
        const url = `https://stormy-badlands-58007.herokuapp.com/myOrders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                const remaining = orders.filter(service =>service._id !== id)
                setOrders(remaining)
                }
                
        })
    }
    return (
        <div>
            <h4>Total Orders: {orders?.length}</h4>
            <div className="main-order">
                 <div className="order-container">
                {
                    orders.map((service, index)=> (
                        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service?.img} />
  <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
    <Card.Text>
 {service?.description.slice(0, 150)}
     
</Card.Text>
<button className="m-2  bg-primary">{service?.status}</button> <br />
<Button variant="danger">Delete</Button>

  </Card.Body>
</Card>
        </div>
                    ))
                }
            </div>
        </div>
        </div>
    );
};

export default MyOrder;