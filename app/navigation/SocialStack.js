import { StackNavigator } from 'react-navigation';

import SocialFeedScreen from '../Screens/SocialFeedScreen';

const SocialStack = StackNavigator({
  Social: {
    screen: SocialFeedScreen
  },

});

export default SocialStack;