import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Principal from "../pages/PrincipalPage";
import Sapato from '../pages/SapatoPage'
import Sobre from "../pages/SobrePage";
import Cadastro from "../pages/CadastraPage";
import Login from "../pages/LoginPage";

const Tab = createBottomTabNavigator()

function Menu() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
            <Tab.Screen name="Sapato" component={Sapato} options={{ headerShown: false }} />
            <Tab.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
 
const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name= "Principal" component= {Menu} options={{ headerShown: false }} />

            <Stack.Screen name= "Login" component= {Login} options={{ headerShown: false }} />

            <Stack.Screen name= "Cadastro" component= {Cadastro} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}
