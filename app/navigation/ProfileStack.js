import { StackNavigator } from 'react-navigation';

import IntroScreen from '../Screens/IntroScreen';




const ProfileStack = StackNavigator({
  Profile: {
    screen: IntroScreen
  },

  

});

export default ProfileStack;