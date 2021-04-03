import React from 'react';
import { Card, CardImg, CardBody, CardText,
    CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function RenderWeatherItem ({weather}) {
    return (
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
    );
}

const Weather = (props) => {
  
    const weather = props.weather.weather.map((weather) => {
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
            <p className="subtitle">Your daily weather forecast with the fastest updates ! <br></br>
                                    Down below you see an overview of the whole week, click on the day you are interested in, <br></br>
                                    to display its details. The specific day with its weather conditions will pop up on your window !
            </p>
        </div>
        <div className="row align-items-start">
          {weather}
        </div>
      </>
    );
}

export default Weather;