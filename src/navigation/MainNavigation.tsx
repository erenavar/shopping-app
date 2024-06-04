import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductListScreen from '../screens/ProductListScreen';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Products" component={ProductListScreen} />
                <Tab.Screen name="Cart" component={CartScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}