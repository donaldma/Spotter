import React, { Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';

class SmallDetails extends Component {

  handleClick = () => {
    this.props.toggleHidden();
  }

  render() {
    const { gym } = this.props;

    const open_color = {
      color: '#3aa33c'
    }

    const closed_color = {
      color: '#f99f02'
    }
    
    if(gym.opening_hours && gym.opening_hours.open_now) {
      return (
        <div className="detailcontainer">
          <a href="#" onClick={this.handleClick} className="smalldetails-link">
            <div className="smalldetails-container">
              <div className="smalldetails-header">
                <h3 className="smalldetails-title">{gym.name}</h3>
              </div>
              <div className="smalldetails-body">
                <span className="smalldetails-location"><i className="fa fa-map-marker" aria-hidden="true"></i> {gym.vicinity}</span>
                <span className="smalldetails-time" style={open_color}><i className="fa fa-clock-o" aria-hidden="true"></i> Open Now</span>
              </div>
              <div className="smalldetails-footer">
                <span className="smalldetails-rsvp">
                </span>
              </div>
            </div>
          </a>
        </div>
      );
    } 
    if(gym.opening_hours && !gym.opening_hours.open_now) {
      return (
        <div className="detailcontainer">
          <a href="#" onClick={this.handleClick} className="smalldetails-link">
            <div className="smalldetails-container">
              <div className="smalldetails-header">
                <h3 className="smalldetails-title">{gym.name}</h3>
              </div>
              <div className="smalldetails-body">
                <span className="smalldetails-location"><i className="fa fa-map-marker" aria-hidden="true"></i> {gym.vicinity}</span>
                <span className="smalldetails-time" style={closed_color}><i className="fa fa-clock-o" aria-hidden="true"></i> Closed</span>
              </div>
              <div className="smalldetails-footer">
                <span className="smalldetails-rsvp">
                </span>
              </div>
            </div>
          </a>
        </div>
      );
    } 
    return (
      <div className="detailcontainer">
        <a href="#" onClick={this.handleClick} className="smalldetails-link">
          <div className="smalldetails-container">
            <div className="smalldetails-header">
              <h3 className="smalldetails-title">{gym.name}</h3>
            </div>
            <div className="smalldetails-body">
              <span className="smalldetails-location"><i className="fa fa-map-marker" aria-hidden="true"></i> {gym.vicinity}</span>
            </div>
            <div className="smalldetails-footer">
              <span className="smalldetails-rsvp">
              </span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default SmallDetails;