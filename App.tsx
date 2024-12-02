import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackParamList} from './src/types.ts';
import ProfileScreen from './src/components/screens/ProfileScreen.tsx';
import TodoScreen from './src/components/screens/TodoScreen.tsx';
import HomeScreen from './src/components/screens/HomeScreen.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                    <Stack.Screen name="Todo" component={TodoScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
