import React, { Component } from 'react';
import SmallDetails from './SmallDetails'
// import LargeDetails from './LargeDetails'
import axios from 'axios';
import Moment from 'moment';

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedEvent: null
    }
  }

  toggleHidden(e) {
    this.setState({
      selectedEvent: e
    })
  }

  renderGyms() {
    return this.props.gyms.map((e, index) => {
      return <SmallDetails 
        key={index}
        gym={e}
        toggleHidden={this.toggleHidden.bind(this, e)} 
        />
    })
  }

  // renderLargeDetails() {
  //   return <LargeDetails 
  //     event={this.state.selectedEvent}
  //     user={this.props.user}    
  //     toggleHidden={this.toggleHidden.bind(this)} 
  //     RSVP={this.RSVP.bind(this)} 
  //     CancelRSVP={this.CancelRSVP.bind(this)}    
  //   />
  // }

  render() {
    return (
      <div>
        <div className="sidebar">
          {!this.state.selectedEvent && this.renderGyms() }   
        </div>
      </div>      
    );
  }
}

export default SideBar;