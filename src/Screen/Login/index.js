import React from 'react';
import { Text } from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';


const Login = () => {
    const [text, onChangeText] = React.useState("");
    console.log(text)
    return (
        <Container>
            <Text>Hi from Login{text}</Text>
            <Input
                style
                label="Username"
                onChangeText={(text) => onChangeText(text)}
                value={text}
                // icon={' '} 
                iconPosition="right"
                error="This field is require"
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
        </Container>
    );
};
export default Login;