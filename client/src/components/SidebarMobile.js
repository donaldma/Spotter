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

  toggleMap = () => {
    this.setState({
      selectedGym: null  
    })
  }

  renderLargeDetails() {
    return (
      <LargeDetailsMobile 
        gym={this.state.selectedGym}  
        toggleHidden={this.toggleHidden.bind(this)}
        toggleMap={this.toggleMap}  
      />
    );
  }

  render() {
    if(this.state.selectedGym) {
      return (
        <div>
          <div className="sidebar-mobile">
            { this.state.selectedGym && this.renderLargeDetails() }
          </div>
        </div>      
      );
    }
    return (
      <div>
        <div className="sidebar">
        </div>
      </div>  
    );
  }
}

export default SideBarMobile;