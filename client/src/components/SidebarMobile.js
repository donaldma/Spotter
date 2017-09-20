import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
import LargeDetailsMobile from '../containers/LargeDetailsMobile'

class SideBarMobile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGym: null
    }
  }

  toggleHidden(gym) {
    this.setState({
      selectedGym: gym
    })
  }

  renderLargeDetails() {
    return (
      <LargeDetailsMobile 
        gym={this.state.selectedGym}  
        toggleHidden={this.toggleHidden.bind(this)}
        toggleMap={this.props.toggleMap}  
      />
    );
  }

  render() {
    return (
      <div>
        <div className="sidebar-mobile">
          { this.renderLargeDetails() }
        </div>
      </div>      
    );
  }
}

export default SideBarMobile;