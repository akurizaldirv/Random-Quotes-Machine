import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Cards = () => {
  return (
    <div className="outer-card">
      <Card id="quote-box">
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon
              icon={faQuoteLeft}
              size="2xl"
              className="quote-mark"
            />
            <p className="ms-3" id="text">
              WWWW Adipisicing id proident occaecat quis eiusmod laboris officia
              adipisicing elit et aliqua occaecat. Adipisicing id proident
              occaecat quis eiusmod laboris officia adipisicing elit et aliqua
              occaecat.
            </p>
          </Card.Title>
          <Card.Text id="author">- Author</Card.Text>
          <Row>
            <Col className="col-auto">
              <a
                href="twitter.com/intent/tweet"
                target="_blankc"
                id="tweet-quote"
              >
                <Button variant="primary" className="btn">
                  <FontAwesomeIcon icon={faTwitter} />
                </Button>
              </a>
            </Col>
            <Col className="col-auto ms-auto">
              <Button variant="primary" id="new-quote" className="btn">
                New Quote
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
