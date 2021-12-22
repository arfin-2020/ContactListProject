import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { LOGIN } from '../../context/routeName';
import Container from "../common/Container";
// import styles from '../common/Container/styles';
import CustomeButton from "../common/CustomeButton";
import Input from "../common/Input";
import styles from './styles';

const RegisterComponent = ({ 
 onSubmit,
  onChange,
  form,
  loading,
  error,
  errors, }) => {

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
                {/* {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )} */}
                 {error?.error && <Text>{error?.error}</Text>}
                    <Input
                        label="Username"
                        placeholder='Enter username'
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name:'userName', value})
                        }}
                        error={errors.userName || error?.username?.[0]}
                    />

                    <Input
                        label="First Name"
                        placeholder='Enter first Name'
                        iconPosition="right"
                        onChangeText={(value)=>{
                            onChange({name: 'firstName', value})
                        }}
                        error={errors.firstName || error?.first_name?.[0]}
                    />

                    <Input
                        label="Last Name"
                        placeholder='Enter last Name'
                        iconPosition="right"
                        onChangeText={(value) =>{
                            onChange({name: 'lastName', value})
                        }}
                        error={errors.lastName || error?.last_name?.[0]}
                    />

                    <Input
                        label="Email"
                        placeholder='Enter Email'
                        iconPosition="right"
                        onChangeText={(value) =>{
                            onChange({name: 'email', value})
                        }}
                        error={errors.email || error?.email?.[0]}
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
                        error={errors.password || error?.password?.[0]}
                    />
                    {/* {console.log('error--------', error)} */}
                    {/* {console.log('errors--------', errors)} */}
                    <CustomeButton 
                    loading={loading} 
                    primary 
                    title='Submit' 
                    disabled={loading}
                    onPress={onSubmit} 
                    />

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