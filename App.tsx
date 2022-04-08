import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

class App extends React.Component {
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
      <NavigationContainer>
        <Text style={styles.header}>BicloFinder</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text style={styles.container}>
              <Text style={styles.name}>{item.name}</Text>
              {/* <Text style={styles.name}>{item.address}</Text>
              <Text style={styles.name}>{item.bike_stands}</Text>
              <Text style={styles.name}>{item.available_bike_stands}</Text>
              <Text style={styles.name}>{item.available_bikes}</Text> */}
            </Text>
          )}
        />
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  name: {
    backgroundColor: "#f9c2ff",
    height: 150,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  header: {
    fontSize: 20,
    backgroundColor: "blue",
  },
  title: {
    fontSize: 24,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
export default App;
