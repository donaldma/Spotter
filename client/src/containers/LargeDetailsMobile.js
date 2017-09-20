import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions';
import Stars from 'react-stars';
import PhoneNumber from 'react-phone-number';
import NoRatings from '../components/LargeDetailsNoRatings';
import Ratings from '../components/LargeDetailsRatings';
import Open from '../components/LargeDetailsOpen';
import Closed from '../components/LargeDetailsClosed';
import NoHours from '../components/LargeDetailsNoHours';

class LargeDetailsMobile extends Component {
  componentDidMount() {
    this.props.fetchDetails(this.props.gym.place_id);    
  }

  handleClick = () => {
    this.props.toggleMap()
  }
  
  render() {
    
    if(!this.props.details[0]) {
      return (
        <div className="loading">Loading...</div>
      );
    }
    
    const { gym } = this.props;

    if(!gym.rating) {
      if(gym.opening_hours && gym.opening_hours.open_now) {
        return (
          <div className="largedetails-container">
            <NoRatings gym={gym} handleClick={this.handleClick} />
            <Open details={this.props.details[0]} /> 
          </div>
        );
      }
      if(gym.opening_hours && !gym.opening_hours.open_now) {
        return (
          <div className="largedetails-container">
            <NoRatings gym={gym} handleClick={this.handleClick} />
            <Closed details={this.props.details[0]} /> 
          </div>
        );
      }
      return (
        <div className="largedetails-container">
          <NoRatings gym={gym} handleClick={this.handleClick} />
          <NoHours details={this.props.details[0]} /> 
        </div>
      );
    }
    
    if(gym.opening_hours && gym.opening_hours.open_now) {
      return (
        <div className="largedetails-container">
          <Ratings gym={gym} handleClick={this.handleClick} />
          <Open details={this.props.details[0]} /> 
        </div>
      );
    }
    if(gym.opening_hours && !gym.opening_hours.open_now) {
      return (
        <div className="largedetails-container">
          <Ratings gym={gym} handleClick={this.handleClick} />
          <Closed details={this.props.details[0]} /> 
        </div>
      );
    }
    return (
      <div className="largedetails-container">
        <Ratings gym={gym} handleClick={this.handleClick} />
        <NoHours details={this.props.details[0]} /> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect (mapStateToProps, { fetchDetails })(LargeDetailsMobile);