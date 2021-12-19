import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { REGISTER } from '../../context/routeName';
import Container from "../common/Container";
// import styles from '../common/Container/styles';
import CustomeButton from "../common/CustomeButton";
import Input from "../common/Input";
import styles from './styles';

const LoginComponent = () => {
   const {navigate} = useNavigation();
    return (
        <Container>

            {/* <Input
                style
                label="Username"
                onChangeText={(text) => onChangeText(text)}
                value={text}
                // icon={' '} 
                iconPosition="right"
            // error="This field is require"
            // placeholder='username'
            />
            <Input
                style
                label="Password"
                onChangeText={(text) => onChangeText(text)}
                value={text}
                icon='HIDE'
                iconPosition="right"
            // placeholder='password'
            // error={"This field is require"}
            />
            <CustomeButton secondary title='Submit' loading={true} disabled={true} />
            <CustomeButton secondary loading={true} title='Click me' />
            <CustomeButton primary title='Submit' loading={true} disabled={true} />
            <CustomeButton danger title='Delete' /> */}
            
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImage}
                />
            </View>
            <View>
                <Text style={styles.title}>Wellcome to ACA Contact</Text>
                <Text style={styles.subTitle}>Please Login here.</Text>
                <View style={styles.form}>
                <Input
                    
                    label="Username"
                    placeholder='Enter username'
                    iconPosition="right"
                />
                <Input
                    
                    label="Password"
                    placeholder='Enter password'
                    secureTextEntry={true}
                    icon='Show'
                    iconPosition="right"
                />
            <CustomeButton primary title='Submit' />
            <View style={styles.createSection}>
                <Text style={styles.infoText}>Need a new account?</Text>
                <TouchableOpacity onPress={()=>{navigate(REGISTER)}}>
                    <Text style={styles.linkBtn}>Register</Text>
                </TouchableOpacity>
            </View>
                </View>
            </View>
        </Container>
    )
}

export default LoginComponent;