import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';



const Container = ({children}) =>{
    return(
        <ScrollView>
            <View style={[styles.wapper]}>{children}</View>
        </ScrollView>
    )
}

export default Container;