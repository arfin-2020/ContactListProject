import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../context/routeName';
import ContactDetail from '../Screen/ContactDetail';
import Contacts from '../Screen/Contacts';
import CreateContact from '../Screen/CreateContact';
import Settings from '../Screen/Settings';







const HomeNavigator = () =>{
    const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}/>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}/>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}/>
            <HomeStack.Screen name={SETTINGS} component={Settings}/>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;