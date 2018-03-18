import { StackNavigator } from 'react-navigation';

import SocialStack from '../navigation/SocialStack';



const SocialNavigator = StackNavigator({
  SocialStack: {
    screen: SocialStack
  },
  
}, 

{
  initialRouteName: 'SocialStack',
  mode: 'modal',
  headerMode: 'none'
});

export default SocialNavigator;