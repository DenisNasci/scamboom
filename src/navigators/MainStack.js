import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

enableScreens();
const MainStack = createStackNavigator();


export default () => (
    <MainStack.Navigator>
        <MainStack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{headerShown: false,}}
        />

        <MainStack.Screen 
            name="SignUp" 
            component={SignUp} 
            options={{ 
                title: 'Cadastro',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#9da0eb',
                    height: 80,
                },
                headerTitleStyle: {
                    color: "#FFF",
                    fontSize: 25,
                    fontWeight: 'bold',
                },
                headerTintColor: '#FFF',
            }}
      />

    </MainStack.Navigator>
);