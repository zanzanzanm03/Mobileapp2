
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
  AppRegistry,
  ActivityIndicator
} from 'react-native';
import ListView from 'deprecated-react-native-listview';

class ListviewScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  GetItem (shirtName) {
   
    Alert.alert(shirtName);
  
    }

  componentDidMount() {

      return fetch('http://192.168.43.56/api/list_shirt.php')
        .then((response) => response.json())
        .then((responseJson) => {
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    ListViewItemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }
  
  
    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (

        <View style={styles.MainContainer}>
  
          <ListView
  
            dataSource={this.state.dataSource}
  
            renderSeparator= {this.ListViewItemSeparator}
  
            renderRow={(rowData) => <Text style={styles.rowViewContainer} 
            onPress={this.GetItem.bind(this, rowData.shirtName)} >{rowData.shirtName}</Text>}
  
          />
  
        </View>
      );
    }
  }

  export default ListviewScreen;

  // render() {
  //   return (
  //     <FlatList 
  //       enableEmptySections={true}
  //       data={this.state.data}
  //       keyExtractor= {(item) => {
  //         return item.id;
  //       }}
  //       renderItem={({item}) => {
  //         return (
  //           <View>
  //             <TouchableOpacity onPress={() => this.eventClickLister("row")}>
  //               <View style={styles.box}>
  //                 <Image style={styles.icon} source={require('D:/application/Mobileapp2/shirtProject/Image/aboutreact.png')}/>
  //                 <Image style={styles.image} source={{uri: item.image}} />
  //                 <View style={styles.boxContent}>
  //                   <Text style={styles.title}>Shirt</Text>
  //                   <Text style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
  //                 </View>
  //               </View>
  //             </TouchableOpacity>
  //           </View>
  //         )
  //       }}/>
  //   );
  // }
// }

const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  icon:{
    width:20,
    height:20,
    alignSelf:'center',
    marginRight:10
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  title:{
    fontSize:18,
    color:"#151515",
  },
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10
    },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    }
}); 
