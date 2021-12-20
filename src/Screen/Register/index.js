import React, { useState } from 'react';
import RegisterComponent from '../../components/Register';
import envs from '../../config/env';
import axios from '../../helpers/axiosInterceptor';

const SignUp = () =>{
     const [form, setForm] = useState({});
     const [errors, setErrors] = useState({});
     const {DEV_BACKEND_URL} = envs;
     
     console.log('Backend url-----', DEV_BACKEND_URL);
     console.log('__DEV__-----', __DEV__);

    // React.useEffect(()=>{
    //     axiosInstance.post('api/contacts/').catch((error)=>{
    //         console.log('error', error.response);
    //     });
    // },[]);

     const onChange = ({name, value}) =>{
         
            setForm({...form,[name]: value});

            if(value !==''){
                if(name === 'password'){
                    if(value.length < 6){
                        setErrors((prev) =>{
                            return{...prev, [name]: 'This field needed 6 Character'}
                        })
                    }
                    else{
                        setErrors((prev) =>{
                            return{...prev, [name]: null}
                        })
                    }
                } else{

                    setErrors((prev)=>{
                        return {...prev, [name]:null}
                    })
                }
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
        //  console.log('form---------', form);
         if(Object.values(form).length === 5 &&
            Object.values(form).every((item)=>item.trim()) &&
            Object.values(errors).every((item)=>!item)
         ){
                console.log('111',111);
         }
        
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