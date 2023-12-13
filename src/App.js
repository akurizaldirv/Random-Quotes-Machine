// import Cards from './assets/Cards';
import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  
  const altQuotes = require('./assets/quotes.json').quotes;
  
  const getRandomNum = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  }

  const rand = getRandomNum(altQuotes.length)
  
  const [bgColor, setBgColor] = useState("FFC0D9");
  const [quote, setQuote] = useState(altQuotes[rand].quote);
  const [author, setAuthor] = useState(altQuotes[rand].author);

  const styleBg = {
    backgroundColor: "#" + bgColor,
  };

  const generateColor = () => {
    setBgColor(Math.random().toString(16).substr(-6));
  };

  const handleClick = () => {
    const rand = getRandomNum(altQuotes.length);

    setQuote(altQuotes[rand].quote);
    setAuthor(altQuotes[rand].author);
    generateColor();
  };

  return (
    <div className="App" style={styleBg}>
      <div className="outer-card">
        <Card id="quote-box">
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                size="2xl"
                className="quote-mark"
                color={'#'+bgColor}
              />
              <p className="ms-3" id="text">
                {quote}
              </p>
            </Card.Title>
            <Card.Text id="author">- {author}</Card.Text>
            <Row>
              <Col className="col-auto">
                <a
                  href="twitter.com/intent/tweet"
                  target="_blankc"
                  id="tweet-quote"
                >
                  <Button variant="dark" className="btn" style={styleBg}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                </a>
              </Col>
              <Col className="col-auto ms-auto">
                <Button variant="dark" id="new-quote" className="btn" onClick={handleClick} style={styleBg}>
                  New Quote
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
