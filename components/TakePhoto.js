import React from 'react';
import { ImageEditor, Image, View, TouchableOpacity, StyleSheet, Text, FlatList, ScrollView, StatusBar } from 'react-native';
import { Camera } from 'react-native-camera';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { Button, Icon } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

//Touch up design later.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    height: 100,
    width: 100,
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
 },
 capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
 }
})
