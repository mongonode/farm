import React from 'react';
import { useState } from 'react';

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    KeyboardAvoidingView
} from 'react-native';

import LongButton from '../../../components/buttons/LongButton';
import LoginHeader from '../../../components/headers/LoginHeader';
import CredentialField from '../../../components/inputs/CredentialField';
import PasswordField from '../../../components/inputs/PasswordField';

const FarmerLogin =( { navigation } )=> {

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const submit_Values =()=> {
        const user = {email: userEmail, password: userPassword}

        //Validate and to data base
        console.log(user)
        navigation.navigate('Home')
    }
   
    return (
        <View style={styles.body}>
            <LoginHeader Title='Farmer Log In'></LoginHeader>

            <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <ScrollView>

                    <View style={styles.logoBox}>
                        <Image
                            style={styles.logo}
                            source={require('../../../Assets/Logo/LoginLogo.png')}
                        />
                    </View>

                    <View style={styles.fields}>
                        <View style={styles.singleField} >
                            <CredentialField Label='Email Address' Placeholder='example@gmail.com' Change={ (value) => setUserEmail(value) } />
                        </View>

                        <View style={styles.singleField} >
                            <PasswordField Label='Password' Placeholder='Your password' Change={ (value) => setUserPassword(value) } />
                        </View>
                    </View>

                    <View style={styles.button}>
                        <LongButton Title='Log In' press_Action={submit_Values}></LongButton> 
                    </View>
                </ScrollView> 
            </KeyboardAvoidingView>             
        </View>
    )
}

const styles = StyleSheet.create({
    body : {
        backgroundColor: 'white',
        height:'100%',
    },

    logoBox : {
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        marginTop:40,
        height:250,
        width:250
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
        marginTop:'10%',
        marginBottom:'15%'
    }
})

export default FarmerLogin;