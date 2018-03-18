import { StackNavigator } from 'react-navigation';

import SocialFeedScreen from '../Screens/SocialFeedScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import TakePhoto from '../Screens/TakePhoto'
import ImageSelector from '../Screens/ImageSelector'
import CardStack from '../navigation/CardStack'


const SocialStack = StackNavigator({
  Social: {
    screen: SocialFeedScreen
  },
  Profile: {
    screen : ProfileScreen
  },
  TakePhoto: {
    screen : TakePhoto
  },
  ImageSelector : {
    screen: ImageSelector
  },


});

export default SocialStack;