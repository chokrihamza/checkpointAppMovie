import React from 'react'
import { Container, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import './Trailer.css'

function Trailer(props) {

    return (
        <Container style={{ width: '90%' }}  >
            <Card  >
                <Card.Body>
                    <Iframe

                        allowFullScreen
                        url={props.location.state.Trailer}
                        width="100%"
                        height="450px"
                        display="initial"> </Iframe>
                    <Card.Title>{props.location.state.TrailerTitle}</Card.Title>
                    <Card.Text>
                        {props.location.state.TrailerDescrition}
                    </Card.Text>
                    <Button variant="danger"><Link to="/" style={{ color: 'white', textDecoration: 'none' }} className="LinkToHome">Go Home</Link></Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Trailer
