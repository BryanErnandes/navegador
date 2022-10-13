import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator  } from '@react-navigation/drawer'

import Icon  from '@expo/vector-icons/AntDesign';


import Principal from "../pages/PrincipalPage";
import Sapato from '../pages/SapatoPage'
import Sobre from "../pages/SobrePage";
import Cadastro from "../pages/CadastraPage";
import Login from "../pages/LoginPage";

const Tab = createBottomTabNavigator()

function Menu() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Principal" component={Principal} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"closecircle"} color={"red"} size={size} />)
                }} />
            <Tab.Screen name="Sapato" component={Sapato} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"pluscircle"} color={"red"} size={size} />)
                }} />
            <Tab.Screen name="Sobre" component={Sobre} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"exclamationcircle"} color={"red"} size={size} />)
                }} />
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator ()

function Gaveta() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Sapato" component={Principal} />
            <Drawer.Screen name="Principal" component={Sapato} />
            <Drawer.Screen name="Sobre" component={Sobre} />
        </Drawer.Navigator>
    )
}



 
const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Principal">
            <Stack.Screen name= "Principal" component= {Menu} options={{ headerShown: false }} />

            <Stack.Screen name= "Principal" component= {Gaveta} options={{ headerShown: false }} />

            <Stack.Screen name= "Login" component= {Login} options={{ headerShown: false }} />

            <Stack.Screen name= "Cadastro" component= {Cadastro} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}
