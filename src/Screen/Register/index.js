import React, { useState } from 'react';
import RegisterComponent from '../../components/Register';


const SignUp = () =>{
     const [form, setForm] = useState({});
     const [errors, setErrors] = useState({});

     const onChange = ({name, value}) =>{
         
            setForm({...form,[name]: value});

            if(value !==''){
                setErrors((prev)=>{
                    return {...prev, [name]:null}
                })
            }
            else {
                setErrors((prev) =>{
                    return{...prev, [name]: 'This field is required'}
                })
            }
     };

     const onSubmit = () =>{
        if(!form.userName){
            setErrors((prev)=>{
                return {...prev, userName:'Please add user Name field.'}
            })
        }
        if(!form.firstName){
            setErrors((prev)=>{
                return {...prev, firstName: 'Please add first name field.'}
            })
        }
        if(!form.lastName){
            setErrors((prev)=>{
                return {...prev, lastName: 'Please enter last name field.'}
            })
        }
        if(!form.email){
            setErrors((prev)=>{
                return {...prev, email: 'Please enter email field.'}
            })
        }
        if(!form.password){
            setErrors((prev)=>{
                return {...prev, password: 'Please enter password field.'}
            })
        }
         console.log('form---------', form);
        
     }

    return(
        <RegisterComponent 
        form={form} 
        onChange={onChange} 
        errors={errors} 
        onSubmit={onSubmit}/>
    );
};

export default SignUp;