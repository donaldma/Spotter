import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGyms, clearGyms } from '../actions';
import { bindActionCreators } from 'redux';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps/lib";

import SearchBox from "react-google-maps/lib/places/SearchBox";
import SideBar from "./Sidebar";

const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  marginTop: `60px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
};

const SearchBoxGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    zoom={props.zoom}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_CENTER}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Location"
      inputStyle={INPUT_STYLE}
    />
    {props.markers.map((marker, index) => (
      <Marker position={marker.position} key={index} />
    ))}
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 10,
      bounds: null,
      center: {
        lat: 49.2827291,
        lng: -123.12073750000002,
      },
      markers: [],
      gyms: [],
      lat: null,
      lng: null
    };
  }

  componentDidMount() {
    this.props.fetchGyms(this.state.center.lat, this.state.center.lng);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.gyms !== nextProps.gyms) {
      this.setState({
        gyms: nextProps.gyms
      })
    }
  }

  handleMapMounted = (map) => {
    this._map = map;
  }

  handleSearchBoxMounted = (searchBox) => {
    this._searchBox = searchBox;
  }

  handlePlacesChanged = () => {
    const places = this._searchBox.getPlaces();

    // Add a marker for each place returned from search bar
    const markers = places.map(place => ({
      position: place.geometry.location,
    }));

    // Set markers; set map center to first search result
    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;
    
    this.setState({
      zoom: 15,
      center: mapCenter,
      markers,
      lat: places[0].geometry.location.lat(),
      lng: places[0].geometry.location.lng()
    }, () => {
    this.props.fetchGyms(this.state.center.lat(), this.state.center.lng());
    });
  }
  
  // handleMarkerClick = (e) => {
  //   const events = this.props.events
  //   events.map((event) => {
  //     const lat = e.latLng.lat();
  //     const lng = e.latLng.lng();
  //     const threshold = 0.000001;
  //     const event_lat = parseFloat(event.latitude);
  //     const event_lng = parseFloat(event.longitude);
  //     if (Math.abs(lat - event_lat) < threshold && Math.abs(lng - event_lng) < threshold) {
  //       this.refs.sidebar.toggleHidden(event);       
  //     }
  //   })
  // }
 
  render() {
    return (
      <div className="mapcontainer">
        <SearchBoxGoogleMap
          containerElement={
            <div style={{ height: '100%'}} />
          }
          mapElement={
            <div style={{ height: '100%'}} />
          }
          center={this.state.center}
          onMapMounted={this.handleMapMounted}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          onPlacesChanged={this.handlePlacesChanged}
          markers={this.state.markers}
          events={this.props.events}
          onMarkerClick={this.handleMarkerClick}
          zoom={this.state.zoom}
        />
        <SideBar 
          ref="sidebar"
          gyms={this.state.gyms}
        />
        <div id="map" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGyms, clearGyms }, dispatch);
}

function mapStateToProps(state) {
  return {
    gyms: state.gyms
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);