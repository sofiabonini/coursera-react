import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText,
    CardTitle, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderWeatherItem ({weather}) {
    return (
      <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                  <Card>
                    <Link to={`/weather/${weather.id}`} >
                      <Card>
                        <CardImg src={baseUrl + weather.image} alt={weather.name} />
                        <CardBody>
                          <CardTitle>{weather.name}</CardTitle>
                          <CardText>{weather.avgTemp}</CardText>
                        </CardBody>
                      </Card>
                    </Link>
                </Card>
      </FadeTransform>
    );
}

class Weather extends Component {
  constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postFeedback( values.location );
    this.props.resetFeedbackForm();
  }

    render() {

      const weather = this.props.weather.weather.map((weather) => {
          return (
              <div className="col-12 col-md m-1"  key={weather.id}>
                  <RenderWeatherItem weather={weather} />
              </div>
          );
      });

      return (
        <>
          <div className="container">
              <h3 className="title">Weather Forecast</h3>
              <Form model="update" onSubmit={(values) => this.handleSubmit(values)}>
                          <Row className="form-group">
                                  <Col md={9}>
                                      <Control.text model=".location" id="location" name="location"
                                          placeholder="Your Location"
                                          className="form-control"
                                          validators={{
                                              required, minLength: minLength(3), maxLength: maxLength(20)
                                          }}
                                          />
                                      <Errors
                                          className="text-danger"
                                          model=".location"
                                          show="touched"
                                          messages={{
                                              required: 'Required',
                                              minLength: 'Must be greater than 2 characters',
                                              maxLength: 'Must be 15 characters or less'
                                          }}
                                      />
                                  </Col>
                                  <Col className="form-group" md={3}>
                                      <Button type="submit" color="primary">
                                        Update Location
                                      </Button>
                                  </Col>
                              </Row>
                          </Form>
              <p className="subtitle">Your daily weather forecast with the fastest updates ! <br/>
                                      Down below you see an overview of the whole week, click on the day you are interested in, <br/>
                                      to display its details. The specific day with its weather conditions will pop up on your window !
              </p>
          </div>
          <div className="row align-items-start">
            {weather}
          </div>
        </>
      );
  }
}

export default Weather;