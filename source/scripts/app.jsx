"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RootComponent from './components/RootComponent';

ReactDOM.render(<RootComponent name="World"/>, global.document.querySelector('.root-anchor'));