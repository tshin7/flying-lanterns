import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const {mainStyle} = this.props;
    return (
      <div style={mainStyle}>
        Flying Lanterns provides costumes and accessories for cosplaying.
        At the moment. everything on this site is created by Misha.
      </div>
    );
  }
}
