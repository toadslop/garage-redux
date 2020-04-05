/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

class CarsNew extends Component {
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
            <form>
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

export default reduxForm({ form: 'newCarForm' })(
  connect(null, {})(CarsNew)
);