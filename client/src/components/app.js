import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import Map from '../containers/Map';

class App extends Component {
  render() {
    return(
      <div>
        <Map />
      </div>
    );
  }
}

export default App;