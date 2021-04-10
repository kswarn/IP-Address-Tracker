import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";

const mapStyles = {
  width: "100%",
  height: "500px",
  position: "absolute",
  top: "45%",
  zindex: "-1",
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        style={mapStyles}
      >
        <Marker onClick={this.onMarkerClick} name={"Current Location"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}
CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233,
  },
  centerAroundCurrentLocation: false,
  visible: true,
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyBeBvVHEOdKLRx018YwCxC7shDjJzFPOYE",
})(MapContainer);
