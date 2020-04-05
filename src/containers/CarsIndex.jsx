/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

class CarsIndex extends Component {
  renderCars() {
    return this.props.cars.map((car) => {
      return (
        // <Link to={`/posts/${post.id}`} key={post.id}>
        <div className="car-card" key={car.id}>
          <h3>{car.brand}</h3>
          <h3>{car.model}</h3>
          <p>{car.owner}</p>
          <p>{car.plate}</p>
        </div>
        // </Link>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Sidebar />
        <div className="cars-list">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
