import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useUserAuth } from "../context/UserAuthContext";

function EditProfile() {
  const { user } = useUserAuth();
  const mystyle = {
    color: "black",
    padding: "10px",
    width: "1000px",
  };

  const myimg = {
    height:'125px',
    width:'125px'
  };


  const handleSubmit = (event) => {};

  return (
    <div className=" text-center">

    <Form style={mystyle} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <div>
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img alt="..." style={myimg} className="rounded-circle" src={"https://via.placeholder.com/125x125" || user.photoURL } />
          </a>
        </div>  
      </Row>

      <Row className="mb-3">
          <Form.Label  >First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={user.displayName && user.displayName.split(" ")[0] || 'Jon'}/>

          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={user.displayName && user.displayName.split(" ")[1] || 'Doe'}/>
        
          <Form.Label>Bio</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value='Hi , I am MAC Student'
          />
          <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              required
              defaultValue={user.email && user.email.split("@")[0]}
            />
          <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              required
              defaultValue={user.email && user.email}
            />
          <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone"
              required
              defaultValue={user.email && user.email || 6476121111}
            />
      </Row>

      <Button type="submit">Save</Button>
    </Form>
    </div>
  );
}

export default EditProfile;
