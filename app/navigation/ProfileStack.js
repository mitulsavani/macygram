import { StackNavigator } from 'react-navigation';

import ProfileScreen from '../Screens/ProfileScreen';




const ProfileStack = StackNavigator({
  Profile: {
    screen: ProfileScreen
  },

  

});

export default ProfileStack;