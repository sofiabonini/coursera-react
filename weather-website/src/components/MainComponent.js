import React, { Component } from 'react';
import Day from './DayComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Weather from './WeatherComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postFeedback, fetchWeather } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      weather: state.weather
    }
}

const mapDispatchToProps = dispatch => ({
    fetchWeather: () => { dispatch(fetchWeather())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    postFeedback: (location) => dispatch(postFeedback(location))
  });

class Main extends Component {

    componentDidMount() {
        this.props.fetchWeather();
      }

  render() {

    const WeatherWithId = ({match}) => {
        return(
          <Day weather={this.props.weather.weather.filter((weather) => weather.id === parseInt(match.params.weatherId,10))[0]}
              isLoading={this.props.weather.isLoading}
              errMess={this.props.weather.errMess} />
      );
    };

    return (
      <div>
        <Header />
          <Switch>
              <Route path='/home' component={() => <Weather weather={this.props.weather} />} />
              <Route path='/weather/:weatherId' component={WeatherWithId} />
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));