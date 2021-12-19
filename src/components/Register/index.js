import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { LOGIN } from '../../context/routeName';
import Container from "../common/Container";
// import styles from '../common/Container/styles';
import CustomeButton from "../common/CustomeButton";
import Input from "../common/Input";
import styles from './styles';

const RegisterComponent = ({ form,
    onChange,
    errors,
    onSubmit }) => {

    const { navigate } = useNavigation();

    return (
        <Container>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImage}
                />
            </View>
            <View>
                <Text style={styles.title}>Wellcome to ACA Contact</Text>
                <Text style={styles.subTitle}>Please Register here.</Text>
                <View style={styles.form}>
        
                    <Input
                        label="Username"
                        placeholder='Enter username'
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name:'userName', value})
                        }}
                        error={errors.userName}
                    />

                    <Input
                        label="First Name"
                        placeholder='Enter first Name'
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name: 'firstName', value})
                        }}
                        error={errors.firstName}
                    />

                    <Input
                        label="Last Name"
                        placeholder='Enter last Name'
                        iconPosition="right"
                        onChangeText={(value) =>{
                            onChange({name: 'lastName', value})
                        }}
                        error={errors.lastName}
                    />

                    <Input
                        label="Email"
                        placeholder='Enter Email'
                        iconPosition="right"
                        onChangeText={(value) =>{
                            onChange({name: 'email', value})
                        }}
                        error={errors.email}
                    />

                    <Input
                        label="Password"
                        placeholder='Enter password'
                        secureTextEntry={true}
                        icon='Show'
                        iconPosition="right"
                        onChangeText={(value) =>{
                            onChange({name: 'password', value})
                        }}
                        error={errors.password}
                    />
                    <CustomeButton primary title='Submit' onPress={onSubmit} />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an anccount?</Text>
                        <TouchableOpacity onPress={() => { navigate(LOGIN) }}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default RegisterComponent;