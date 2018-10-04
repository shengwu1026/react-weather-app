import React, {Component} from 'react';
import ZipCode from './ZipCode';
import Forecast from './Forecast';
import Detail from './Detail';
import {BrowserRouter, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Route render={(props) => {
            return (
              <div className='navbar'>
                <h1>Clever Title</h1>
                <ZipCode
                  direction='row'
                  onSubmitZipcode={(city) => {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    })
                  }}
                  zipcode={123}
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
                  zipcode={123}
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