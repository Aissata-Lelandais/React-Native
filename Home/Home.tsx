import * as React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  View,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.apiCall();
  }
  async apiCall() {
    let resp = await fetch(
      "https://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=cbaae4edd2a305b6b8bfdbfbd87610896d5ab354"
    );
    let respJson = await resp.json();
    console.log(respJson);
    console.warn(respJson);
    this.setState({ data: respJson });
  }
  render() {
    console.log("this.state", this.state);
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.header}>BicloFinder</Text>
          <Icon style={styles.icon} name="search" color="white" />
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text style={styles.container}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.adress}>{item.address}</Text>
              <Text style={styles.stand}>{item.bike_stands}</Text>
              <Text style={styles.bikest}>{item.available_bike_stands}</Text>
              <Text style={styles.avaibikes}>{item.available_bikes}</Text>
            </Text>
          )}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    display: "flex",
    marginTop: 10,
    height: 150,
    justifyContent: "center",
    padding: 20,
    textAlign: "center",
    paddingTop: StatusBar.currentHeight,
  },
  icon: {
    display: "flex",
  },
  header: {
    fontSize: 35,
    backgroundColor: "blue",
    justifyContent: "center",
    color: "white",
  },
  title: {
    fontSize: 24,
  },
  container: {},
  adress: {
    flex: 2,
    backgroundColor: "yellow",
    textAlign: "center",
  },
  stand: {},
  bikest: {},
  avaibikes: {},
});

export default Home;
