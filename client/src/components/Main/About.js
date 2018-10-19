import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const {mainStyle} = this.props;
    return (
      <div style={mainStyle}>
        About
      </div>
    );
  }
}
