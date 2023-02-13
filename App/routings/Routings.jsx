import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChooseRole from "../screens/1_start/ChooseRole";
import ChooseSign from "../screens/1_start/ChooseSign";
import FarmerRegister from "../screens/2_sign/farmer/FarmerRegister";
import FarmerLogin from "../screens/2_sign/farmer/FarmerLogin";
import Home from "../screens/3_Home/Home";

const Stack = createNativeStackNavigator();


const Routings =()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='ChooseRole' component={ChooseRole} />
                <Stack.Screen name='ChooseSign' component={ChooseSign} />
                <Stack.Screen name='FarmerRegister' component={FarmerRegister} />
                <Stack.Screen name='FarmerLogin' component={FarmerLogin} />
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    ) 
}

export default Routings;