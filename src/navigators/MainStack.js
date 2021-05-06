import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MainTabs from './MainTabs';
import Chat from '../pages/Chat';
import Post from '../pages/Post';
import Produto from '../pages/Produto';
import Servico from '../pages/Servico';

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
        <MainStack.Screen
            name="MainTabs" 
            component={MainTabs} 
            options={{headerShown: false,}}
        />

        <MainStack.Screen 
            name="Chat" 
            component={Chat} 
            options={{
                title: 'Mensagens',
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#9d95ff',
                },
                headerTitleStyle: {
                    color: "#FFF",
                    fontSize: 25,
                    fontWeight: 'bold',
                },
                headerTintColor: '#FFF',
                }
            }  
        />
        <MainStack.Screen
            name="Post" 
            component={Post} 
            options={{
                title: 'Publicação',
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#9da0eb',
                },
                headerTitleStyle: {
                    color: "#FFF",
                    fontSize: 25,
                    fontWeight: 'bold',
                },
                headerTintColor: '#FFF',
                }
            }
        />
        <MainStack.Screen
            name="Produto" 
            component={Produto} 
            options={{headerShown: false}
            }
        />
         <MainStack.Screen
            name="Servico" 
            component={Servico} 
            options={{headerShown: false}
            }
        />

    </MainStack.Navigator>
);