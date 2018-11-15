import React, { Component } from 'react';

export default class Products extends Component {
  render() {
    const {mainStyle} = this.props;
    return (
      <div style={mainStyle}>
        Products
      </div>
    );
  }
}
