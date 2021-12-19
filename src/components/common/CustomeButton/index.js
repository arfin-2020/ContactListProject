import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';
const CustomeButton = ({ title, secondary, primary, danger, disabled, loading, onPress }) => {

    const [focus, setFocus] = useState(false);
    
    const getBgColor = () =>{
        if(disabled){
            return colors.grey;
        }
        if(primary){
            return colors.primary;
        }
        if(danger){
            return colors.danger;
        }
        if(secondary){
            return colors.secondary;
        }
       
    }
    return (
        <TouchableOpacity 
        disabled={disabled}
        onPress={onPress}
        style={[styles.inputContainer,{backgroundColor:getBgColor()}]}>
          <View style={styles.buttonActivity}>
              {loading && <ActivityIndicator color={colors.primary}/>}
              {title && (<Text style={{color: disabled ? 'black' : colors.white, paddingLeft: loading ? 10 : 0}}>{title}</Text>)}
          </View>
        </TouchableOpacity>
    )
}

export default CustomeButton;
