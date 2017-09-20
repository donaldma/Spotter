import React, { Component } from 'react';
import PhoneNumber from 'react-phone-number';

export default class LargeDetailsClosed extends Component {

  renderHours() {
    if(!this.props.details.opening_hours) {
      return (
        <div>Loading...</div>
      );
    }
    return this.props.details.opening_hours.weekday_text.map((day, index) => {
      return (
        <div key={index} className="largedetails-hours-body">
          {day}
        </div>
      );
    })
  }

  render() {

    const closed_color = {
      color: '#f99f02'
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
                <span className="largedetails-body-text" style={closed_color}>Closed</span>
              </div>
            </div>
          </div>
          <div className="largedetails-hours-section">      
            <h1 className="largedetails-hours-tile">Hours</h1>
            {this.renderHours()}
          </div> 
          <div className="largedetails-footer">
            <a href="#" className="main-button">Go to gym page</a>                                
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
                <span className="largedetails-body-text" style={closed_color}>Closed</span>
              </div>
            </div>
          </div>
          <div className="largedetails-hours-section">      
            <h1 className="largedetails-hours-tile">Hours</h1>
            {this.renderHours()}
          </div> 
          <div className="largedetails-footer">
            <a href="#" className="main-button">Go to gym page</a>                                
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
                <span className="largedetails-body-text" style={closed_color}>Closed</span>
              </div>
            </div>
          </div>
          <div className="largedetails-hours-section">      
            <h1 className="largedetails-hours-tile">Hours</h1>
            {this.renderHours()}
          </div>         
          <div className="largedetails-footer">
            <a href="#" className="main-button">Go to gym page</a>                                
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
              <span className="largedetails-body-text" style={closed_color}>Closed</span>
            </div>
          </div>
        </div>
        <div className="largedetails-hours-section">      
          <h1 className="largedetails-hours-tile">Hours</h1>
          {this.renderHours()}
        </div> 
        <div className="largedetails-footer">
          <a href="#" className="main-button">Go to gym page</a>                                
        </div>
      </div> 
    );
  }
}