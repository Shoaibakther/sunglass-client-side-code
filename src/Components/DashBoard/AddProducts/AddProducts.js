import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
      axios.post('https://stormy-badlands-58007.herokuapp.com/products', data)
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
            <h1>Please Add A Products</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 100 })}
      placeholder="Name:"          />
      <input {...register("description", )} placeholder="Description"/>
               
        <input {...register("img",)} placeholder="Img Link" />
        <input type="number" {...register("price", { min: 0, max: 10000 })} placeholder="Products Price" />
      <input type="submit" />
    </form>
        </div>
        </div>
    );
};

export default AddProducts;