import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './app/Screens/IntroScreen';

import SocialFeedScreen from '../macygram/app/Screens/SocialFeedScreen'

import RootNavigator from '../macygram/app/navigation/HomeTabs';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    return(
      <RootNavigator/>
    

   
    );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});