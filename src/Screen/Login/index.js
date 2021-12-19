import React from 'react';
import Container from '../../components/common/Container';
import CustomeButton from '../../components/common/CustomeButton';
import Input from '../../components/common/Input';


const Login = () => {
    const [text, onChangeText] = React.useState("");
    console.log(text)
    return (
        <Container>
          
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
            <CustomeButton secondary title='Submit' loading={true} disabled={true}/>
            <CustomeButton secondary title='Click me'/>
            <CustomeButton primary title='Submit' loading={true} disabled={true}/>
            <CustomeButton danger title='Delete' />
        </Container>
    );
};
export default Login;