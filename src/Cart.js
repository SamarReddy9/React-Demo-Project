import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Cart = ({ data, Change }) => {
  return ( 
    <>

    <br/><br/>

      <Container className="ContainerOne">
        {data.map((ele) => {
          return (
            <div>
              <Row>
                <Col className="Colone">
                  <center>
                    <img src={ele.image} height="90vh" />
                 </center>
                </Col>

                <Col xs={6} className="Coltwo">
                  <h5> Title : <span>{ele.title}</span>  </h5>
                  <h5>Catagory : {ele.catagory}</h5>
                  <h5>Actual Price : ₹ <del>  {ele.aprice}</del></h5>
                  <h5>Offered Price : ₹ {ele.price}</h5>
                </Col>

                <Col className="Colthree">
                  <div className="mb-2">
                    <Button variant="primary" size="sm" onClick={() => Change(ele, -1)} > - </Button> 
                    <span className="Qnt"> {ele.Quantity} </span>
                    <Button variant="primary" size="sm" onClick={() => Change(ele, +1)} > + </Button>
                  </div>
                </Col>
              </Row>

              <hr />
            </div>
          );
        })}
      </Container>

    </>
  );
};
export default Cart;
