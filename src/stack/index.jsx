import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListCheckIn from '../components/listCheckIn';
import SubmitScreen from '../components/submitScreen';

const Tabs = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                indicatorStyle: {
                    borderBottomColor: "black",
                    borderBottomWidth: 2,
                },
            }}>
                <Tab.Screen name="Submit" component={SubmitScreen} />
                <Tab.Screen name="Check-ins" component={ListCheckIn} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Tabs