import { StackNavigator } from 'react-navigation';

import SocialFeedScreen from '../Screens/SocialFeedScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const SocialStack = StackNavigator({
  Social: {
    screen: SocialFeedScreen
  },
  Profile: {
    screen : ProfileScreen
  },

});

export default SocialStack;