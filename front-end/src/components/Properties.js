import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./Style.css";

function Properties() {
  const [propertyList, setpropertyList] = useState([]);

  const getProductDetails = () => {
    axios
      .get("http://localhost:4000/api/property/getall-property")
      .then((res) => {
        setpropertyList(res.data.result);
        console.log("result_prod", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(propertyList);

  useEffect(() => {
    getProductDetails();
  }, []);

  const propertyDisplay = propertyList.map((details, index) => {
    return (
      <>
        <div className="properties-card">
          <div className="prod" key={index}>
            <Card style={{ width: "18rem" }}>
              <img src={details.thumb} />
              <Card.Img
                variant="top"
                src="./images/img01.jpg"
                alt="property image"
              />
              <Card.Body>
                <Card.Text>
                  <h4>{details.Type}</h4>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <h5>{details.Price}</h5>
                </ListGroup.Item>
                <ListGroup.Item>{details.Details}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                {/* <Card.Link href="#">Wish List</Card.Link> */}
                <button className="btn-view">view details</button>
                <button className="btn-wish">add to wish list</button>
               
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  });

  return <div>{propertyDisplay}</div>;
}

export default Properties;
