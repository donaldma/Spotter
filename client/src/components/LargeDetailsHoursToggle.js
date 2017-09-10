import React, { Component } from 'react';
import PhoneNumber from 'react-phone-number';

export default class LargeDetailsHoursToggle extends Component {

  renderHours() {
    return this.props.details.opening_hours.weekday_text.map((day, index) => {
      return (
        <div key={index} className="largedetails-hours-body">
          {day}
        </div>
      );
    })
  }

  render() {
    return (
      <div className="largedetails-hours-section">      
        <h1 className="largedetails-hours-tile">Hours</h1>
        {this.renderHours()}
      </div>
    );
  }
}