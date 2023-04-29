import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Todo from './L4-screens/Todo';
import Done from './L4-screens/Done';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerStyle: headerStyle,
                    headerTintColor: 'white'
                }} name='ToDo' component={Todo}/>
                <Stack.Screen options={{
                    headerStyle: headerStyle,
                    headerTintColor: 'white'
                }} name='Done' component={Done}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const headerStyle = {
    backgroundColor: 'black',
}

export default Navigator