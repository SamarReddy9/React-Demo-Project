import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddProducts = () => {
  const [data, setData] = useState({});
 
  useEffect(() => {}, [data]);

  const onChangeHandilar = (ele) => {
    setData({ ...data, [ele.target.name]: ele.target.value });
  };

  const onSubmitHandilar = () => {
    const inpObj = {
      title: data.title,
      catagory: data.catagory,
      aprice: data.aprice,
      price: data.price,
      image: data.image,
    };

    const ResponseSend = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inpObj),
    };

    fetch('https://63ad89c3da81ba97619fc5c2.mockapi.io/products', ResponseSend)
      .then((obj) => obj.json())
      .then((data) =>
        setData({
          title: '',
          catagory: '',
          aprice: '',
          price: '',
          image: '',
        })
      );
  };
  return (
    <>
      <br />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={data.title}
            onChange={onChangeHandilar}
            placeholder="Enter Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Catagory</Form.Label>
          <Form.Control
            type="text"
            name="catagory"
            value={data.catagory}
            onChange={onChangeHandilar}
            placeholder="Enter Catagory"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Actual Price</Form.Label>
          <Form.Control
            type="text"
            name="aprice"
            value={data.aprice}
            onChange={onChangeHandilar}
            placeholder="Enter Actual Price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Offered Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={data.price}
            onChange={onChangeHandilar}
            placeholder="Enter Offer Price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={data.image}
            onChange={onChangeHandilar}
            placeholder="Upload Image URL"
          />
        </Form.Group>

        <Button variant="primary" onClick={onSubmitHandilar} type="submit">
          {' '}
          Submit{' '}
        </Button>
      </Form>
    </>
  );
};

export default AddProducts;
