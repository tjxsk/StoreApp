import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Add.css';
import { useState } from 'react'

const add = () => {
  const [product, setProduct] = useState({
    title: '',
    img: '',
    price: '',
    rating: ''
  });

  const [errors, setErrors] = useState({});

  let fetchValue = (e) => {
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      setProduct({ ...product, img: file });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };



  const regexPatterns = {
    title: /^[a-zA-Z0-9 ]{3,50}$/,
    price: /^\d+(\.\d{1,2})?$/,
    rating: /^[1-5]$/
  };

  let validateForm = () => {
    let newErrors = {};

    if (!regexPatterns.title.test(product.title)) {
      newErrors.title = "Product name must be between 3 and 50 alphanumeric characters.";
    }

    if (product.img == '') {
      newErrors.img = "No image attached.";
    }

    if (!regexPatterns.price.test(product.price)) {
      newErrors.price = "Please enter a valid price (numbers with up to 2 decimals).";
    }


    if (!regexPatterns.rating.test(product.rating)) {
      newErrors.rating = "Rating must be a number between 1 and 5.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  let sendData = () => {
    if (validateForm())
      console.log(product);
  };



  return (
    <>
      <br />
      <h4>New Product</h4>
      <div className='add'>
        <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidateautoComplete="off">
          <TextField onChange={fetchValue} name="title" id="outlined-basic" label="Product Name" variant="outlined" error={!!errors.title} helperText={errors.title} value={product.title} />
          <br />
          <input onChange={fetchValue} type='file' accept='image/*' />
          {errors.img && <div style={{ color: 'red',  fontSize: 10 }}>{errors.img}</div>}

          <br />
          <TextField onChange={fetchValue} name="price" id="outlined-basic" label="Price" variant="outlined" error={!!errors.price} helperText={errors.price} value={product.price} />
          <br />
          <TextField onChange={fetchValue} name="rating" id="outlined-basic" label="Rating" variant="outlined" error={!!errors.rating} helperText={errors.rating} value={product.rating} />
          <br />
          <Button onClick={sendData} variant="outlined">Add</Button>
        </Box>
      </div>
    </>
  )
}

export default add