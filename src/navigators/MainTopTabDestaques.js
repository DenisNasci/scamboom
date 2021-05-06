import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Produto from '../pages/Produto';
import Servico from '../pages/Servico';

const Tab = createMaterialTopTabNavigator();

const MainTopTabDestaques = () => {
    return (
        <Tab.Navigator
            initialRouteName="Produto"
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
                name="Produto"
                component={Produto}
                options={{ tabBarLabel: "Produtos" }}
            />
            <Tab.Screen
                name="Servico"
                component={Servico}
                options={{ tabBarLabel: "Serviços" }}
            />
        </Tab.Navigator>
    );
}

export default MainTopTabDestaques;
