import { StackNavigator } from 'react-navigation';

import PaymentMethods from '../Screens/PaymentMethods';
import PaymentsScreens from '../Screens/PaymentsScreen';



const CardStack = StackNavigator({
    PaymentMethod: {
        screen: PaymentMethods
     },
     PaymentScreens: {
         screen: PaymentsScreens
     }
});

export default CardStack;