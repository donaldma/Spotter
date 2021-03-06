import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGyms, fetchDetails } from '../actions';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps/lib";
import SearchBox from "react-google-maps/lib/places/SearchBox";
import SideBar from "../components/Sidebar";
import SideBarMobile from "../components/SidebarMobile";
import Media from 'react-responsive';

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
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_CENTER}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Location"
      inputStyle={INPUT_STYLE}
    />
    { props.gyms.map((gym, index) => {
      return (
        <Marker 
        key={index}
        position={{ lat: gym.geometry.location.lat(), lng: gym.geometry.location.lng() }} 
        onClick={props.onMarkerClick}
        />
      );
    })}
  </GoogleMap>
));

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 14,
      bounds: null,
      center: {
        lat: 49.2827291,
        lng: -123.12073750000002,
      },
      markers: [],
      mapHidden: false,
      selectedGym: null
    };
  }

  componentDidMount() {
    this.props.fetchGyms(this.state.center.lat, this.state.center.lng);
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
      zoom: 14,
      center: mapCenter,
      markers,
      lat: places[0].geometry.location.lat(),
      lng: places[0].geometry.location.lng()
    }, () => {
      this.props.fetchGyms(this.state.center.lat(), this.state.center.lng());
    });
  }
  
  handleMarkerClick = (e) => {
    const { gyms } = this.props
    gyms.map((gym) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const threshold = 0.000001;
      const gym_lat = gym.geometry.location.lat();
      const gym_lng = gym.geometry.location.lng();
      if (Math.abs(lat - gym_lat) < threshold && Math.abs(lng - gym_lng) < threshold) {
        this.refs.sidebar.toggleHidden(null);
        this.refs.sidebar.toggleHidden(gym);
      }
    })
  }
  
  handleMobileMarkerClick = (e) => {
    const { gyms } = this.props
    gyms.map((gym) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const threshold = 0.000001;
      const gym_lat = gym.geometry.location.lat();
      const gym_lng = gym.geometry.location.lng();
      if (Math.abs(lat - gym_lat) < threshold && Math.abs(lng - gym_lng) < threshold) {
        this.refs.mobile.toggleHidden(null);
        this.refs.mobile.toggleHidden(gym);
      }
    })
  }
 
  render() {
    return (
      <div>
        <Media maxWidth={767}>
          <div className="mapcontainer-mobile">
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
              gyms={this.props.gyms}
              onMarkerClick={this.handleMobileMarkerClick}
              zoom={this.state.zoom}
            />
          </div>
          <SideBarMobile 
            ref="mobile"
          />
          <div id="map" />
        </Media>

        <div className="mapcontainer-desktop">
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
            gyms={this.props.gyms}
            onMarkerClick={this.handleMarkerClick}
            zoom={this.state.zoom}
          />
        </div>
          <SideBar 
            ref="sidebar"
            gyms={this.props.gyms}
          />
          <div id="map" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gyms: state.gyms,
    details: state.details
  }
}

export default connect(mapStateToProps, { fetchGyms, fetchDetails })(Map);