/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    const { garage } = this.props;
    this.props.createCar(values, garage, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField = (field) => {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <Sidebar path={this.props.match.path} />
        <div className="right-scene">
          <div className="form-box">
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                label="Brand"
                name="brand"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Model"
                name="model"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Owner"
                name="owner"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Plate"
                name="plate"
                type="text"
                component={this.renderField}
              />
              <button
                className="submit-button"
                type="submit"
                disabled={this.props.pristine || this.props.submitting}
              >
                Add car
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { garage: state.garage };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
