import { StackNavigator } from 'react-navigation';

import ProfileStack from '../navigation/ProfileStack';
import SearchProductScreen from '../Screens/SearchProductScreen';
import TakePhoto from '../Screens/TakePhoto';



const ProfileNavigator = StackNavigator({
  ProfileStack: {
    screen: ProfileStack
  },
  Search: {
    screen: SearchProductScreen
  },
  SearchPhoto: {
    screen: TakePhoto
  },

}, {
  initialRouteName: 'ProfileStack',
  mode: 'modal',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  },
});

export default ProfileNavigator;