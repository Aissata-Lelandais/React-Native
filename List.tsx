import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  StatusBar,
} from "react-native";

export default class name extends Component {
  static navigationOptions = {
    title: "Names",
  };

  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2,
      }),
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    fetch(
      "http://hardeepcoder.com/laravelhttps://api.jcdecaux.com/vls/v1/stations?contract=Nantes&apiKey=cbaae4edd2a305b6b8bfdbfbd87610896d5ab354/easyshop/api/products/" +
        params.id
    )
      .then((response) => response.json())
      .then((responseJson) => {
        data = responseJson; //JSON.stringify(responseJson);
          dataSource: this.state.dataSource.cloneWithRows(data),
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>{params.cat}</Text>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <View style={styles.productBox}>
              <Image
                style={{ width: "100%", height: 250 }}
                source={{ uri: rowData.pro_img }}
              />

              <Text></Text>

              <Text></Text>
            </View>
          )}
        />
      </View>
    );
  }
}
AppRegistry.registerComponent("names", () => names);
