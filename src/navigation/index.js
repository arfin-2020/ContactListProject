import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from "react";
import { GlobalContext } from '../context/Provider';
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";


const AppNavContainer = () =>{
    // const state = useContext(GlobalContext);
    const {authState: {isLoggedIn},} = useContext(GlobalContext);
    // console.log('state----------', state);
    // const isLoggedIn = state.authState.isLoggedIn;
    console.log(isLoggedIn)
    // console.log(state.authState.isLoggedIn);
    return(
        <NavigationContainer>
        {
            isLoggedIn ?  <DrawerNavigator/> : <AuthNavigator/>
        }
           
        </NavigationContainer>
    )
}

export default AppNavContainer;