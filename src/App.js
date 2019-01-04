import React, { Component } from 'react'
import './App.css'
import { MDBContainer, MDBRow, Card, CardBody, CardTitle, Button, CardText, CardImage, Col, Row } from 'mdbreact'

class App extends Component {
  render() {
    return (
      <div className="body">
        <MDBContainer>
          <MDBRow className="col-md-12">
            <Col className="col-md-4 col-sm-12 col-xs-12">
              <Card className="card">
                <CardImage className="img-fluid" src="https://images.indianexpress.com/2017/07/amazon-echo-dot-main.jpg" waves />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <div className="price">
                    <strong>₹ 500</strong>
                  </div>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </CardText>
                  <div className="rating-box">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <Button href="#">View</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-md-4 col-sm-12 col-xs-12">
              <Card className="card">
                <CardImage className="img-fluid" src="https://images.indianexpress.com/2017/07/amazon-echo-dot-main.jpg" waves />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <div className="price">
                    <strong>₹ 500</strong>
                  </div>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </CardText>
                  <div className="rating-box">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <Button href="#">View</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-md-4 col-sm-12 col-xs-12">
              <Card className="card">
                <CardImage className="img-fluid" src="https://images.indianexpress.com/2017/07/amazon-echo-dot-main.jpg" waves />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <div className="price">
                    <strong>₹ 500</strong>
                  </div>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                  <div className="rating-box">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <Button href="#">View</Button>
                </CardBody>
              </Card>
            </Col>
          </MDBRow>
        </MDBContainer >
      </div >

    );
  }
}

export default App;
