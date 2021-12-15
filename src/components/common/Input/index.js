import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';
// import styles from '../Container/styles';

const Input = ({ label, style, onChangeText, value }) => {
    return (
        <View>
            {label && <Text>{label}</Text>}
            <TextInput
                style={[styles.input], style}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

export default Input;
