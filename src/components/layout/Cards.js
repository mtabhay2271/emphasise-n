import React from 'react';
import Card from 'react-bootstrap/Card';

function CardComponent() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/id/7/4728/3168" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
