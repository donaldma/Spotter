import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
import SmallDetails from './SmallDetails'
import LargeDetails from '../containers/LargeDetails'

class SideBar extends Component {
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

  renderGyms() {
    return this.props.gyms.map((gym, index) => {
      return (
        <SmallDetails 
          key={index}
          gym={gym}
          toggleHidden={this.toggleHidden.bind(this, gym)} 
        />
      );
    })
  }

  renderLargeDetails() {
    return (
      <LargeDetails  
        gym={this.state.selectedGym}  
        toggleHidden={this.toggleHidden.bind(this)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          { !this.state.selectedGym && this.renderGyms() }  
          { this.state.selectedGym && this.renderLargeDetails() }     
        </div>
      </div>      
    );
  }
}

export default SideBar;