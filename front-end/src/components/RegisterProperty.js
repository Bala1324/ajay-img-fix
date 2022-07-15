import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./Style.css";
import ImagesUpload from "./ImagesUpload";

function RegisterProperty() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      className="formstyle"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <div class="input-group mb-6">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">
            Category
          </label>
        </div>
        <select class="custom-select1" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Residential</option>
          <option value="2">Commercial</option>
          <option value="3">Agriculture</option>
        </select>
      </div>

      <div class="input-group mb-6">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">
            Type
          </label>
        </div>
        <select class="custom-select2" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">House</option>
          <option value="2">Vacant Plot</option>
          <option value="3">Appartment</option>
          <option value="4">Shop</option>
          <option value="5">Agri Land</option>
          <option value="5">Others</option>
        </select>
      </div>

      {/* <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Type</Form.Label>
        <Form.Control required type="text" placeholder="" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group> */}

      <Form.Group as={Col} md="6" controlId="validationCustom02">
        <Form.Label>Details</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Property Details"
          defaultValue=""
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom01">
        <Form.Label>Price</Form.Label>
        <Form.Control required type="text" placeholder="Asking Price" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom04">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
        </Form.Control.Feedback>
      </Form.Group>

      {/* <Form.Group as={Col} md="4" controlId="validationCustom05">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="Zip" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid zip.
        </Form.Control.Feedback>
      </Form.Group> */}

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label>MobileNo</Form.Label>
        <Form.Control type="number" placeholder="Contact Number" required />
        <Form.Control.Feedback type="invalid">
          Please provide valid contact number.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="6" controlId="validationCustom05">
        <Form.Label>Images</Form.Label>
        <ImagesUpload />
        
        <Form.Control.Feedback type="invalid">
          Please provide images of the property.
        </Form.Control.Feedback>
      </Form.Group>

      {/* <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"> </input>
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
      </div> */}

      <Form.Group className="mb-4">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit Property Details</Button>
    </Form>
  );
}

export default RegisterProperty;
