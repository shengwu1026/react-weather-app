import React, {Component} from 'react';

class ZipCode extends Component {
  state = {
    zipcode: ''
  };

  handleSubmitZipcode = () => {
    console.log(this.state.zipcode);
    this.props.onSubmitZipcode(this.state.zipcode);
    this.setState(() => ({zipcode: ''}))
  };

  handleUpdateZipcode = (e) => {
    e.persist();
    this.setState(() => ({zipcode: e.target.value}))
  };

  render() {
    return (
      <div className='zipCode-container' style={{flexDirection: this.props.direction, display: 'flex'}}>
        <input
          className='form-control'
          onChange={this.handleUpdateZipcode}
          placeholder='Melbourne, AU'
          type='text'
          value={this.state.zipcode}
        />

        <button
          type='button'
          style={{margin: '10px'}}
          className='btn btn-success'
          onClick={this.handleSubmitZipcode}
        >
          Get Weather
        </button>
      </div>
    )
  }
}

export default ZipCode