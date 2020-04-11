/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar, deleteCar } from '../actions';
import Sidebar from './Sidebar';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.car.id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { car } = this.props;
    if (!car) {
      return (
        <div className="container">
          <Sidebar />
          <div className="right-scene">
            <h3>Loading...</h3>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <Sidebar />
        <div className="right-scene car-padding">
          <div className="car-show">
            <div className="car-show-image" >
              <img src="https://www.freeiconspng.com/uploads/hipster-glasses-on-face-views-png-photo-22.png" />
            </div>
            <div className="car-info">
              <div>
                <h3><span className="light">{car.brand} - {car.model}</span></h3>
                <h3>Owner: <span className="light">{car.owner}</span></h3>
              </div>
              <div className="plate-holder">
                <div className="plate">
                  <h3 className="lighter">{car.plate}</h3>
                </div>
              </div>
              <div onClick={this.handleClick} className="delete-button">
                delete
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
