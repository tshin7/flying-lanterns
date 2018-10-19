import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    const {mainStyle} = this.props;
    return (
      <div style={mainStyle}>
        Home
      </div>
    );
  }
}
