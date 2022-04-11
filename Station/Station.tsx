import React, { Component } from "react";
import MapView from "react-native-maps";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  render() {
    return <MapView style={{ flex: 1 }} region={this.state.region} />;
  }
}