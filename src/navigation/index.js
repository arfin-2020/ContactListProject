import React from "react";
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import DrawerNavigator from "./DrawerNavigator";
const AppNavContainer = () =>{
    return(
        <NavigationContainer>
            {/* <AuthNavigator/> */}
            {/* <HomeNavigator/> */}
            <DrawerNavigator/>
        </NavigationContainer>
    )
}

export default AppNavContainer;