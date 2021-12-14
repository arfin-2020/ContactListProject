
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { HOME } from '../context/routeName';
import HomeNavigator from './HomeNavigator';


const DrawerNavigator = () =>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator>
            <Drawer.Screen name={HOME} component={HomeNavigator}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;