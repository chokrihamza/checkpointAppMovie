import React from 'react'
import { Navbar, FormControl, Form, Jumbotron } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Filter.css'

function Filter({ handleText, handleRate }) {
  return (
    <>
      <Navbar className="NavBar">
        <Form inline>
          <FormControl type="text" placeholder="Search By Title..." className=" mr-sm-2" onChange={(e) => handleText(e.target.value)} />
        </Form>
        <Form inline className="seachRate">
          <FormControl max={5} min={0} type="number" placeholder="Rate" className=" mb-2" onChange={(e) => handleRate(e.target.value)} />
        </Form>
      </Navbar>
      <Jumbotron className="jumbotron" fluid>

        <h1 style={{ fontSize: "70px" }}>Anime Movie App</h1>
      </Jumbotron>
    </>
  )
}

export default Filter
