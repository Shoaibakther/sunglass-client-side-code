import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      axios.post('https://sheltered-escarpment-17435.herokuapp.com/review', data)
          .then(res => {
              if (res.data.insertedId) {
                  alert("Added Successfully")
                  reset();
          }
      })
  }
    return (
        <div>
            <div className="add-service">
            <h1>Products Review Field</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })}
      placeholder="Name:"          />
      <input {...register("description", )} placeholder="Tell us about our products"/>
               
                <input type="number" {...register("rating", { min: 0, max: 5 })} placeholder="Products Rating" />
      <input type="submit" />
    </form>
        </div>
        </div>
    );
};

export default Review;