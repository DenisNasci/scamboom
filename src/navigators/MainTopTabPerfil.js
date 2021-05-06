import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserCurriculo from '../pages/UserCurriculo';
import UserInformation from '../pages/UserInformation';
import UserPosts from '../pages/UserPosts';

const Tab = createMaterialTopTabNavigator();

const MainTopTabPerfil = () => {
    return (
        <Tab.Navigator
            initialRouteName="UserInformation"
            tabBarOptions={{
                activeTintColor: "#7159c1",
                labelStyle: { fontSize: 13, fontWeight: 'bold' },
                style: {
                    backgroundColor: "#FFF",
                    marginTop: 10,
                    height: 50,
                    borderRadius: 5
                }
            }}
        >
            <Tab.Screen
                name="UserInformation"
                component={UserInformation}
                options={{ tabBarLabel: "Informações" }}
            />
            <Tab.Screen
                name="UserCurriculo"
                component={UserCurriculo}
                options={{ tabBarLabel: "Currículo" }}
            />
            <Tab.Screen
                name="UserPosts"
                component={UserPosts}
                options={{ tabBarLabel: "Publicações" }}
            />
        </Tab.Navigator>
    );
}

export default MainTopTabPerfil;
