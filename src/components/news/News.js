import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const News = (props ) => {
    const {title,description,urlToImage,url}=props.news;
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary" href={url} target="_blank">More details  </Button>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default News;