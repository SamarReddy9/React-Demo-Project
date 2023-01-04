import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    jsontwo();
  }, []);

  const jsontwo = async () => {
    const Request = await fetch('https://63ad89c3da81ba97619fc5c2.mockapi.io/products');
    const Response = await Request.json();

    const final = [];
    Response.forEach((ele) => {
      if (final.indexOf(ele.catagory) == -1) {
        final.push(ele.catagory);
      }
    });
    setData(final);
  }; 

  //const sam = ["mobile" , "laptop"];

  return ( 
    <>
      <div className="container-fluid">
        <div className="header">
           G-art
        
          <i className="fas fa-shopping-cart " />
          <div className="user-login">
            <Link to="/Cart" style={{ textDecoration: 'none' }}>
              {' '}
              <i className="fas fa-shopping-cart cart" />{' '}
            </Link>
            <Link to="/AddProducts" style={{ textDecoration: 'none' }}>
              {' '}
              <i className="  fa fa-floppy-o" />{' '}
            </Link>
          </div>
        </div>
      </div>

      <Navbar bg="p-3 mb-2 bg-light text-dark" expand="lg" variant="dark">
        <Container fluid="lg" style={{ margin: '0px' }}>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav" bg="primary" >
            <Nav className="me-auto">
              <Nav.Link style={{ color: 'white', textDecoration: 'none' }}>
                {data.map((ele) => {
                  return (
                    <Link
                      to={ele}
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      {ele} &nbsp;&nbsp;&nbsp;
                    </Link>
                  );
                })}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavList;
