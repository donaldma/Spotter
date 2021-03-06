import React, { Component } from 'react';

export default class LargeDetailsNoRatings extends Component {
  render() {
    return (
      <div className="largedetails-titlebar">
        <h1 className="largedetails-titlebar-title">{this.props.gym.name}</h1>
        <h2 className="largedetails-titlebar-subtitle">Gym<span className="divider"> - </span>No Ratings</h2>
        <a href="#" onClick={this.props.handleClick} className="largedetails-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 80 80">
          <path fill="#333" d="M34.4 40L1.174 73.168c-1.563 1.56-1.566 4.093-.006 5.657s4.09 1.567 5.654.007L40 45.66s-.003.004 33.173 33.17c1.56 1.56 4.098 1.56 5.658 0 1.56-1.56 1.56-4.1 0-5.66C45.678 40.043 45.6 40 45.6 40s.077.043 33.23-33.17c1.56-1.56 1.56-4.13 0-5.66-1.56-1.56-4.087-1.56-5.657 0C39.997 34.36 39.997 34.4 39.997 34.4L6.825 1.172C5.265-.39 2.732-.39 1.17 1.172c-1.56 1.562-1.56 4.094 0 5.656L34.4 40z"></path>
          </svg>
        </a>
      </div>
    );
  }
}