import React from 'react';

import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button';

const Design = ({ ele, Handilar }) => {
  console.log(ele);
  return (
    <>
      <Card style={{ width: '25rem' }} className="OutPic">
        <div>
          <Card.Img
            variant="top"
            src={ele.image}
            style={{ width: '10rem', margin: '30px' }}
            className="pics"
          />
        </div>
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Text>
            Actual Price : <del>{ele.aprice}</del>
          </Card.Text>
          <Card.Text>Offered Price : {ele.price}</Card.Text>
        </Card.Body>

        <Card.Body>
          <center>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                Handilar(ele);
              }}
            >
              Add To Cart
            </Button>{' '}
            &nbsp;
            <Button variant="secondary" size="sm">
              Buy
            </Button>
          </center>
        </Card.Body>
      </Card>
      &nbsp;&nbsp;&nbsp;
      {/* 

    <table border="1">
      <tr>
        <td>{ele.id}</td>
        <td>{ele.catagory}</td>
        <td>{ele.title}</td>
        <td>{ele.price}</td>
        <td><img src={ele.image} width="30"/></td>

        <td><button onClick={()=>{Handilar(ele)}}>Add to Cart</button></td>

        </tr>

      </table> */}
    </>
  );
};
export default Design;
