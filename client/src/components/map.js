import React, { Component } from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps/lib";

import SearchBox from "react-google-maps/lib/places/SearchBox";

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
    };
  }

  handleMapMounted = (map) => {
    this._map = map;
  }

  // handleBoundsChanged = () => {
  //   this.setState({
  //     bounds: this._map.getBounds(),
  //     center: this._map.getCenter(),
  //   });
  //   const bound_a = {
  //     lat: this.state.bounds.f.b,
  //     lng: this.state.bounds.b.b
  //   }
  //   const bound_b = {
  //     lat: this.state.bounds.f.f,
  //     lng: this.state.bounds.b.f
  //   } 
  //   this.props.locationFilter(bound_a, bound_b);
  // }

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
          onBoundsChanged={this.handleBoundsChanged}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          bounds={this.state.bounds}
          onPlacesChanged={this.handlePlacesChanged}
          markers={this.state.markers}
          events={this.props.events}
          onMarkerClick={this.handleMarkerClick}
          zoom={this.state.zoom}
        />
      </div>
    );
  }
}

export default Map;