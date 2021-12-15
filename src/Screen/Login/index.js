import React from 'react';
import { Text } from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';


const Login = () =>{
    const [text, onChangeText] = React.useState("");
    console.log(text)
    return(
        <Container>
            <Text>Hi from Login</Text>
            <Input style={{backgroundColor:'green'}} 
            label="Username" 
            onChangeText={(text)=>onChangeText(text)} 
            value={text}/>
        </Container>
    );
};
export default Login;