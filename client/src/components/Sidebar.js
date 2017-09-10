import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';
import SmallDetails from './SmallDetails'
import LargeDetails from './LargeDetails'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGym: null
    }
  }

  toggleHidden(e) {
    this.setState({
      selectedGym: e
    })
  }

  renderGyms() {
    return this.props.gyms.map((e, index) => {
      return (
        <SmallDetails 
          key={index}
          gym={e}
          toggleHidden={this.toggleHidden.bind(this, e)} 
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