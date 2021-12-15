import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LOGIN, REGISTER } from '../context/routeName';
import Login from '../Screen/Login';
import SignUp from '../Screen/Register';







const AuthNavigator = () =>{
    const AuthStack = createStackNavigator();
    return(
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name={LOGIN} component={Login}/>
            <AuthStack.Screen name={REGISTER} component={SignUp}/>
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;