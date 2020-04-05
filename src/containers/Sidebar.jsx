/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {
  render() {
    const { garage } = this.props;
    return (
      <div className="sidebar">
        <div className="sidebard-images">
          <div className="garage-banner" />
          <div className="sidebar-logo">
            <img
              src="https://www.freeiconspng.com/uploads/hipster-glasses-on-face-views-png-photo-22.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="sidebar-content">
          <h1>{garage.name}</h1>
          <p>{garage.description}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps)(Sidebar);
