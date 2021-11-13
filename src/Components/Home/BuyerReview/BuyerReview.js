import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const BuyerReview = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-escarpment-17435.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>Customers Review</h2>
            {
                services.map(service =><SingleReview service={service} key={service._id}></SingleReview>)
            }
        </div>
    );
};

export default BuyerReview;