import { StackNavigator } from 'react-navigation';

import SocialStack from '../navigation/SocialStack';
import CardStack from '../navigation/CardStack'



const SocialNavigator = StackNavigator({
  SocialStack: {
    screen: SocialStack
  },
 CardStack : {
   screen: CardStack
 }

  
}, 

{
  initialRouteName: 'SocialStack',
  mode: 'modal',
  headerMode: 'none'
});

export default SocialNavigator;