import React, {Component} from 'react';
import queryString from 'query-string';
import {getForecast} from "../utils/api";
import DayItem from './DayItem';

export default class Forecast extends Component {
  state = {
    forecastData: [],
    loading: true
  };

  componentDidMount() {
    this.makeRequest(queryString.parse(this.props.location.search).city);
  }

  componentWillReceiveProps(nextProps) {
    this.makeRequest(queryString.parse(nextProps.location.search).city);
  }

  makeRequest = (city) => {
    this.setState(() => ({loading: true}));
    getForecast(city)
      .then((res) => this.setState(() => ({loading: false, forecastData: res})))
  };

  handleClick = (city) => {
    city.city = this.city;
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: city,
    })
  };

  render() {
    return this.state.loading === true
      ? <h1 className='forecast-header'> Loading </h1>
      : <div>
        <h1 className='forecast-header'>{this.city}</h1>
        <div className='forecast-container'>
          {this.state.forecastData.list.map((listItem) => (<DayItem onClick={this.handleClick(listItem)} key={listItem.dt} day={listItem}/>))}
        </div>
      </div>
  }
}