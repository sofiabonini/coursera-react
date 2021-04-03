import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

    function RenderConditions({ weather }) {
        return(
            <div key={weather.id} className="col-12 mt-4">
                <div className="row">
                     <Media tag="li">
                        <Media left middle>
                            <Media style={{width: "100px"}}object src={baseUrl + 'images/weather.png'} alt={weather.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media className="time">Wind Conditions</Media>
                            <p className="mt-3">{weather.description}</p>
                        </Media>
                    </Media>
                </div>
                <div className="row">
                    <Media tag="li">
                        <Media left middle>
                            <Media style={{width: "100px"}}object src={baseUrl + 'images/weather.png'} alt={weather.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media className="time">Rain Conditions</Media>
                            <p className="mt-3">{weather.description}</p>
                        </Media>
                    </Media>
                </div>
                <div className="row">
                    <Media tag="li">
                        <Media left middle>
                            <Media style={{width: "100px"}}object src={baseUrl + 'images/weather.png'} alt={weather.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media className="time">Humidity</Media>
                            <p className="mt-3">{weather.description}</p>
                        </Media>
                    </Media>
                </div>
                <div className="row">
                    <Media tag="li">
                        <Media left middle>
                            <Media style={{width: "100px"}}object src={baseUrl + 'images/weather.png'} alt={weather.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media className="time">Pressure</Media>
                            <p className="mt-3">{weather.description}</p>
                        </Media>
                    </Media>
                </div>
                <div className="row row-content">
                    <Media tag="li">
                        <Media left middle>
                            <Media style={{width: "100px"}}object src={baseUrl + 'images/weather.png'} alt={weather.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media className="time">Temperature</Media>
                            <p className="mt-3">{weather.description}</p>
                        </Media>
                    </Media>
                </div>
            </div>
        );
    }

    function RenderDay({weather}) {    
            if (weather != null)
                return(
                    <>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 m-1">  
                                <Card>
                                    <CardBody>
                                        <CardImg style={{ width: '200px', margin: '50px' }} src={baseUrl + weather.image} alt={weather.name}/>
                                        <CardText>{weather.description}{weather.description}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 col-md m-1">  
                            <Card>
                                <CardTitle className="time">10:00 am</CardTitle>
                                <CardBody>
                                    <CardImg style={{ width: '100px', margin: '50px' }} src={baseUrl + weather.image} alt={weather.name}/>
                                    <CardText className="temp">20°C</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md m-1">  
                            <Card>
                                <CardTitle className="time">11:00 am</CardTitle>
                                <CardBody>
                                    <CardImg style={{ width: '100px', margin: '50px' }} src={baseUrl + weather.image} alt={weather.name}/>
                                    <CardText className="temp">22°C</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md m-1">  
                            <Card>
                                <CardTitle className="time">12:00 am</CardTitle>
                                <CardBody>
                                    <CardImg style={{ width: '100px', margin: '50px' }} src={baseUrl + weather.image} alt={weather.name}/>
                                    <CardText className="temp">20°C</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md m-1">  
                            <Card>
                                <CardTitle className="time">13:00 am</CardTitle>
                                <CardBody>
                                    <CardImg style={{ width: '100px', margin: '50px' }} src={baseUrl + weather.image} alt={weather.name}/>
                                    <CardText className="temp">23°C</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md m-1">  
                            <Card>
                                <CardTitle className="time">14:00 am</CardTitle>
                                <CardBody>
                                    <CardImg style={{ width: '100px', margin: '50px' }} src={baseUrl + weather.image} alt={weather.name}/>
                                    <CardText className="temp">24°C</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="container">
                        <div className="col-12">
                            <RenderConditions weather={weather} />  
                        </div>
                    </div>
                </>
                    
                );
            else
                return(
                    <div></div>
                );
    }


    const Day = (props) => {

        if (props.weather != null) {
            return (
                <>
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.weather.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div  className="col-12">
                                <h3>{props.weather.name}</h3>
                                <hr />
                            </div>                
                        </div>  
                    </div>
                    <RenderDay weather={props.weather} />
                </>
            );
        } else
            return(
                <div></div>
            );        
    }

export default Day;