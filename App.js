import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import PaymentsScreen from './app/Screens/PaymentsScreen';

import RootNavigators from '../macygram/app/navigation/RootNavigators';




export default class App extends React.Component {
  constructor(props){
    super(props);
  }


  render() {

    return(
      <RootNavigators/>
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