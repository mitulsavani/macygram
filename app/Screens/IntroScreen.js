import React from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import MACY_LOGO from '../../assets/Images/macys-logo-transparent.png';


export default class IntroScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            screen: null
        }
    }
    render() {
        const { screen } = this.state

    // if (screen === 'LoginScreen') {
    //   return <LoginScreen />;
    // } else if (screen === 'SignUpScreen') {
    //   return <SignUpScreen />;
    // }

    return (
    <LinearGradient
        colors={['#b20a2c','#fffbd5']}
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0.1, 0.8]}
        style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.macylogo} source={MACY_LOGO} />
        </View>

        <View style={styles.joinus}>
            <View style={styles.login}>
            <Button
                title="Login"
                color='black'
                onPress={() => this.props.navigation.navigate('Login')}
            />
            </View>
            <View style={styles.signup}>
            <Button onPress={() => this.props.navigation.navigate('Signup')}
                title="Sign Up"
                
                color='black'
                size="30"
            />
            </View>
        </View>
        </LinearGradient> 
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
imageContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
},
macylogo: {
    width: Dimensions.get('window').width * 0.6,
    height: 100,
    resizeMode: 'center'
},
joinus: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fffbd5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
    height: 1,
    width: 1
    }
},
login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
signup:
    {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    }
});
