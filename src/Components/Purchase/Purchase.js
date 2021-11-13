import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
     const [service, setService] = useState({})
    useEffect(() => {
      fetch(`https://stormy-badlands-58007.herokuapp.com/products/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
  const handleForm = e => {
    e.preventDefault();
  
  }
  
    return (
        <div className="order">
           
        <h4>Latest Sunglass</h4>
        <div className="main-order">
                 <div className="order-container">
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={service?.img} />
  <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
    <Card.Text>
      {service?.description}
                </Card.Text>
                 <Card.Text>
      <h4>TK: {service?.price}</h4>
    </Card.Text>
<Link to="/pay"><button className="btn btn-warning">Confirm Now</button></Link>
  </Card.Body>
        </Card>
        </div>
        <div className="order-section">
                    <h1>Customers Information</h1>
               <Form onSubmit={handleForm}>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Customers Name:</Form.Label>
      <Form.Control value={user?.displayName} type="text" placeholder="Your Name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Customers Email:</Form.Label>
      <Form.Control value={user?.email} type="email" placeholder="Your email" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>BD</option>
        <option>ID</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        </div>
        </div>
    );
};

export default Purchase;