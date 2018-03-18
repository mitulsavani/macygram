import { StackNavigator } from 'react-navigation';

import IntroScreen from '../Screens/IntroScreen';
import SignupScreen from '../Screens/SignupScreen';
import LoginScreen from '../Screens/LoginScreen';


const IntroStack = StackNavigator({
   Intro : {
       screen: IntroScreen
   },
   Login : {
    screen: LoginScreen
    
}, Signup : {
    screen: SignupScreen
},

});

export default IntroStack;