import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ZipCode from './ZipCode';
import Forecast from './Forecast';
import Detail from './Detail';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Route render={(props) => {
            return (
              <div className='navbar'>
                <h1>Weather Forecast (5 Days Later)</h1>
                <ZipCode
                  direction='row'
                  onSubmitZipcode={(city) => {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    })
                  }}
                />
              </div>
            )
          }}
          />

          <Route exact path='/' render={(props) => {
            return (
              <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                <h1 className='header'>Enter a City and State</h1>
                <ZipCode
                  direction='column'
                  onSubmitZipcode={(city) => {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    })
                  }}
                />
              </div>
            )
          }}
          />

          <Route path='/forecast' component={Forecast} />

          <Route path='/details/:city' component={Detail} />

        </div>
      </BrowserRouter>
    )
  }
}