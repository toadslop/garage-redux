/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Sidebar from './Sidebar';

export default class CarsNew extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar path={this.props.match.path} />
      </div>
    );
  }
}
