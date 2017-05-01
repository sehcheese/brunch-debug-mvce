"use strict";

import React from 'react';

var RootComponent = React.createClass({
  propTypes:{
    name: React.PropTypes.string.isRequired
  },

  render: function () {
    return (<div className="helloWorld">Hello {this.props.name}!</div>);
  }
});

module.exports = RootComponent;