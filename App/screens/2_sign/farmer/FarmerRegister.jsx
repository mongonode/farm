import React from 'react';
import { useState } from 'react';

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import LongButton from '../../../components/buttons/LongButton';
import LoginHeader from '../../../components/headers/LoginHeader';
import CredentialField from '../../../components/inputs/CredentialField';
import PasswordField from '../../../components/inputs/PasswordField';

const FarmerRegister =()=> {

    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const submit_Values =()=> {
        const user = {id: userId, name: userName, email: userEmail, password: userPassword}

        //Validate and to data base
        console.log(user)
    }
   
    return (
        <View style={styles.body}>
            <LoginHeader Title='Farmer Registration'></LoginHeader>

            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <ScrollView>
                    <View style={styles.fields}>
                        <View style={styles.singleField} >
                            <CredentialField Label='Farmer ID' Placeholder='Your id' Change={ (value) => setUserId(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <CredentialField Label='Full Name' Placeholder='Your name' Change={ (value) => setUserName(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <CredentialField Label='Email Address' Placeholder='example@gmail.com' Change={ (value) => setUserEmail(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <PasswordField Label='Password' Placeholder='Your password' Change={ (value) => setUserPassword(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <PasswordField Label='Confirm Password' Placeholder='Confirm Password'/>
                        </View>  
                    </View>

                    <View style={styles.button}>
                        <LongButton Title='Register' press_Action={submit_Values}></LongButton> 
                    </View>
                </ScrollView> 
            </KeyboardAvoidingView>             
        </View>
    )
}

const styles = StyleSheet.create({
    body : {
        backgroundColor: 'white',
        height:'100%'
    },

    container: {
        flex: 1,
    },

    singleField: {
        marginVertical:'2.5%'
    },

    fields: {
        marginTop:'8%',
    },

    button: {
        marginTop:'20%',
        marginBottom:'15%'
    }
})

export default FarmerRegister;