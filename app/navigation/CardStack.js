import { StackNavigator } from 'react-navigation';

import PaymentMethods from '../Screens/PaymentMethods';
import PaymentsScreens from '../Screens/PaymentsScreen';
import DashScreens from '../Screens/DashScreen';



const CardStack = StackNavigator({
    PaymentMethod: {
        screen: PaymentMethods
     },
     PaymentScreens: {
         screen: PaymentsScreens
     },
     DashScreens : {
         screen: DashScreens
     }
});

export default CardStack;