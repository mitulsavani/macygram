import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './app/Screens/IntroScreen';
import ProfileScreen from './app/Screens/ProfileScreen';
import PaymentsScreen from './app/Screens/PaymentsScreen';
import SocialFeedScreen from '../macygram/app/Screens/SocialFeedScreen'
import RootNavigator from '../macygram/app/navigation/HomeTabs';
import LoginScreen from './app/Screens/LoginScreen';
import SignupScreen from './app/Screens/SignupScreen';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    return(
      <SignupScreen/>
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