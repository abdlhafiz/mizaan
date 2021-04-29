// import React from 'react';
// import '../../App.css';

// export default function Projects() {
//    return <h1 className='projects'>PROJECTS</h1>;

// }

import React, {useState} from 'react';
import { Button, Card,Container, Row, Col } from 'react-bootstrap';

import Image from 'react-bootstrap/Image';

export default function Projects() {
    return (
      <div style={{ padding: 4}}>

        <Card style={{position: 'relative'}}>

          <Card.Img variant="top" src="/images/pr001.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <div style={{flex:1, flexDirection:'column'}}>
          <Image src="/images/pr003.jpg" rounded />
          <Image src="/images/pr004.jpg" roundedCircle />
          <Image src="/images/pr005.jpg" thumbnail />
        </div>


        <Container style={{flex:'row'}}>
          <Row>
            <Col xs={6} md={4}>
              <Image src="/images/pr003.jpg" rounded />
            </Col>
            <Col xs={6} md={4}>
              <Image src="/images/pr004.jpg" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="/images/pr005.jpg" thumbnail />
            </Col>
          </Row>
        </Container>


        </div>
    )
}
