import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/Detail/DetailScreen';
import ProductListScreen from '../screens/ProductList/ProductListScreen';


const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (

        <Stack.Navigator >
            <Stack.Screen name="Products" component={ProductListScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>

    );
}

export default StackNavigation;