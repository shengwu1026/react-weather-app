import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ZipCode extends Component {
  state = {
    zipcode: ''
  };

  handleSubmitZipcode = () => {
    this.props.onSubmitZipcode(this.state.zipcode);
    this.setState(() => ({zipcode: ''}))
  };

  handleUpdateZipcode = (e) => {
    this.setState(() => ({zipcode: e}))
  };

  render() {
    return (
      <div className='zipCode-container' style={{flexDirection: this.props.direction}}>
        <input
          className='form-control'
          onChange={this.handleUpdateZipcode}
          placeholder='St. George, Utah'
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

ZipCode.propTypes = {
  direction: PropTypes.string
};

ZipCode.defaultProps = {
  direction: 'column'
};

export default ZipCode