import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './app/Screens/IntroScreen';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      screen: 'Intro'
    }
  }


  render() {

    const {screen} = this.state

    if(screen === 'Intro'){
      return <IntroScreen/>
    }
    else 
    {
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app! Jahon</Text>
        </View>
      )
    }
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