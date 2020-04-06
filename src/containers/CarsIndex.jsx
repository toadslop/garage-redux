/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Sidebar from './Sidebar';

class CarsIndex extends Component {
  componentDidMount() {
    const { garage } = this.props;
    this.props.fetchCars(garage);
  }

  getImage = (car) => {
    const baseUrl = "https://pixabay.com/api/?";
    const apiKey = "key=15899465-8b7c5523663c01750d003e03c";
    const query = `&q=${car.model}`;
    const promise = fetch(`${baseUrl}${apiKey}${query}`)
      .then(response => response.data);
    console.log(promise);
    return promise.hits;
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-card" key={car.id}>
            <div className="car-image">
              <img
                src="https://www.freeiconspng.com/uploads/hipster-glasses-on-face-views-png-photo-22.png"
                alt="a car"
              />
            </div>
            <div className="card-content">
              <h3>{car.brand} - {car.model}</h3>
              <p><span className="owner">Owner:</span> {car.owner}</p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Sidebar path={this.props.match.path} />
        <div className="cars-list">
          {this.renderCars()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
