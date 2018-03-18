import { StackNavigator } from 'react-navigation';



import HomeTabs from '../navigation/HomeTabs'
import IntroStack from '../navigation/IntroStack';



const RootNavigators = StackNavigator({
   // this is the deault one ??
    Intro : {
       screen: IntroStack
   },
   Home : {
    screen: HomeTabs
  } 
}, {
    initialRouteName: 'Home',
    mode: 'modal',
    headerMode: 'none'
  });

  export default RootNavigators;