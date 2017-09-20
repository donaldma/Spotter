import axios from 'axios';

export const FETCH_GYMS = 'fetch_gyms';
export const FETCH_DETAILS = 'fetch_details';
export const CLEAR_GYMS = 'clear_gyms';
export const CLEAR_DETAILS = 'clear_details';

export function fetchGyms(lat, lng) {
  return dispatch => {
    dispatch(clearGyms());
    var location = new google.maps.LatLng(lat, lng);

    var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15
    });

    var request = {
      location,
      radius: '1500',
      type: ['gym']
    };

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {        
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          dispatch(setNearbySearchResult(place));
        }
      }
    }
  }

  function setNearbySearchResult(place) {
    return {
      type: FETCH_GYMS,
      payload: { place }
    };
  }
}

export function fetchDetails(placeId) {
  return dispatch => {
    dispatch(clearDetails());
    
    var location = new google.maps.LatLng(49.2827, 123.1207);
    
    var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15
    });
    
    var request = {
      placeId
    };
    
    var service = new google.maps.places.PlacesService(map);
    service.getDetails(request, callback);
    
    function callback(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setSearchDetails(place));
      }
    }
  }
  
  function setSearchDetails(place) {
    return {
      type: FETCH_DETAILS,
      payload: place
    };
  }
}

export function clearGyms() {
  return {
    type: CLEAR_GYMS
  }
}

export function clearDetails() {
  return {
    type: CLEAR_DETAILS
  }
}