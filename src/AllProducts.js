import React, { useState, useEffect } from 'react';
import Design from './Design';
import { useParams } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap'; 

const AllProducts = ({ Handilar }) => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    jsonone();
  }, [id]);

  const jsonone = () => {
    fetch(`https://63ad89c3da81ba97619fc5c2.mockapi.io/products/?catagory=${id}`)
      .then((obj) => obj.json())
      .then((info) => setData(info));
  };
  return (
    <>
      <Container fluid className="mainmargin">
        <Row lg={6} md={2} className="g-4">
          {data.map((ele) => {
            return <Design ele={ele} Handilar={Handilar} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default AllProducts;
