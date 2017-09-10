import React, { Component } from 'react';
import PhoneNumber from 'react-phone-number';

export default class LargeDetailsClosed extends Component {
  render() {
    
    const open_color = {
      color: '#3aa33c'
    }

    if(!this.props.details.website && !this.props.details.international_phone_number) {
      return (
        <div className="largedetails-content">
          <div className="largedetails-section">
            <div className="row">
              <div className="col-sm-2">
                <i className="fa fa-map-marker fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <span className="largedetails-body-text">{this.props.details.formatted_address}</span>
              </div>
            </div>
            <div className="row largedetails-row">
              <div className="col-sm-2">
                <i className="fa fa-clock-o fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <span className="largedetails-body-text" style={open_color}>Open Now</span>
              </div>
            </div>
            <a href="#" className="main-button">Go to gym page</a>                        
          </div>
          <div className="largedetails-section">
          </div>
        </div> 
      );
    }
    if(this.props.details.website && !this.props.details.international_phone_number) {
      return (
        <div className="largedetails-content">
          <div className="largedetails-section">
            <div className="row">
              <div className="col-sm-2">
                <i className="fa fa-map-marker fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <span className="largedetails-body-text">{this.props.details.formatted_address}</span>
              </div>
            </div>
            <div className="row largedetails-row">
              <div className="col-sm-2">
                <i className="fa fa-globe fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <a href={this.props.details.website} target='_blank'><span className="largedetails-body-text-website">{this.props.details.website}</span></a>
              </div>
            </div>
            <div className="row largedetails-row">
              <div className="col-sm-2">
                <i className="fa fa-clock-o fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <span className="largedetails-body-text" style={open_color}>Open Now</span>
              </div>
            </div>
            <a href="#" className="main-button">Go to gym page</a>                        
          </div>
          <div className="largedetails-section">
          </div>
        </div> 
      );
    }
    if(!this.props.details.website && this.props.details.international_phone_number) {
      return (
        <div className="largedetails-content">
          <div className="largedetails-section">
            <div className="row">
              <div className="col-sm-2">
                <i className="fa fa-map-marker fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <span className="largedetails-body-text">{this.props.details.formatted_address}</span>
              </div>
            </div>
            <div className="row largedetails-row">
              <div className="col-sm-2">
                <i className="fa fa-phone fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <PhoneNumber number={this.props.details.international_phone_number} className="largedetails-body-text"/>
              </div>
            </div>
            <div className="row largedetails-row">
              <div className="col-sm-2">
                <i className="fa fa-clock-o fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <span className="largedetails-body-text" style={open_color}>Open Now</span>
              </div>
            </div>
            <a href="#" className="main-button">Go to gym page</a>                        
          </div>
          <div className="largedetails-section">
          </div>
        </div> 
      );
    }
    return (
      <div className="largedetails-content">
        <div className="largedetails-section">
          <div className="row">
            <div className="col-sm-2">
              <i className="fa fa-map-marker fa-lg big-icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <span className="largedetails-body-text">{this.props.details.formatted_address}</span>
            </div>
          </div>
          <div className="row largedetails-row">
              <div className="col-sm-2">
                <i className="fa fa-phone fa-lg big-icon" aria-hidden="true"></i>
              </div>
              <div className="col-sm-10">
                <PhoneNumber number={this.props.details.international_phone_number} className="largedetails-body-text"/>
              </div>
            </div>
          <div className="row largedetails-row">
            <div className="col-sm-2">
              <i className="fa fa-globe fa-lg big-icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <a href={this.props.details.website} target='_blank'><span className="largedetails-body-text-website">{this.props.details.website}</span></a>
            </div>
          </div>
          <div className="row largedetails-row">
            <div className="col-sm-2">
              <i className="fa fa-clock-o fa-lg big-icon" aria-hidden="true"></i>
            </div>
            <div className="col-sm-10">
              <span className="largedetails-body-text" style={open_color}>Open Now</span>
            </div>
          </div>
          <a href="#" className="main-button">Go to gym page</a>                        
        </div>
        <div className="largedetails-section">
        </div>
      </div> 
    );
  }
}