import { StackNavigator } from 'react-navigation';

import ProfileStack from '../navigation/ProfileStack';


const ProfileNavigator = StackNavigator({
  ProfileStack: {
    screen: ProfileStack
  },
 
}, {
  initialRouteName: 'ProfileStack',
  mode: 'modal',
  headerMode: 'none'
});

export default ProfileNavigator;