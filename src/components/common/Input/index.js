import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

const Input = ({ label, onChangeText, value, style, icon, iconPosition, error, placeholder }) => {
//    let dynamicDirection;
//         if(icon && iconPosition){
//             if(iconPosition==='left'){
//                 dynamicDirection= 'row';
//             }
//             else if(iconPosition==='right'){
//                 dynamicDirection= 'row-reverse';
//             }
//         }
    const [focus, setFocus] = useState(false);
    const dynamicDirection = () =>{
        if(icon && iconPosition){
            if(iconPosition==='left'){
                return 'row';
            }
            else if(iconPosition==='right'){
                return 'row-reverse';
            }
        }
    }
    const dynamicBorderColor = () =>{
        if(focus){
            return colors.primary
        }
       else if(error){
            return colors.danger;
        }
        else return colors.grey;
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, {alignItems:icon && 'center' },
                {flexDirection:dynamicDirection(),
                borderColor: dynamicBorderColor()}]}>
                <View>{icon && <Text>{icon}</Text>}</View>
                <TextInput
                    style={[styles.input]}
                    onChangeText={onChangeText}
                    value={value}
                    placeholder={placeholder}
                    onFocus={()=>setFocus(true)}
                    onBlur={()=>setFocus(false)}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

export default Input;
