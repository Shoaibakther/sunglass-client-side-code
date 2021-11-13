// import React from 'react';
import './SingleReview.css'
import useAuth from '../../../Hooks/useAuth';

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const SingleReview = (props) => {
  const { user } = useAuth();
  console.log(user);
    const {name, description, rating } = props.service
    return (
        <div className="review">
        <div className="review-name">
          <h4>{name}</h4>
        </div> <br />
        <div className="rating">
          <Stack className="rating">
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    </Stack>
        </div> <br />
        <div className="review-info">
          <p>{description}</p>
        </div>
        </div>
    );
};

export default SingleReview;