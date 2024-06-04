import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Products" component={StackNavigation} />
                <Tab.Screen name="Cart" component={CartScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}