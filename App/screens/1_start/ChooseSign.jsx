import React from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import LongButton from '../../components/buttons/LongButton';

const ChooseSign =( { navigation } )=> {

    return (
        <View style={styles.body}>
            <View style={styles.logoBox}>
                <Image
                    style={styles.logo}
                    source={require('../../Assets/Logo/LogoMain.png')}
                />
            </View>

            <View style={styles.buttonSet}>
                <View style={styles.alignButtons}>
                    <LongButton Title="Register" press_Action={()=> navigation.navigate('FarmerRegister')}></LongButton>
                    <LongButton Title="Log In" press_Action={()=> navigation.navigate('FarmerLogin')}></LongButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body : {
        backgroundColor: '#005F41',
        height:'100%'
    },

    logoBox : {
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        height: '70%',
        width: '80%'
    },

    buttonSet : {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#F8FBFA',
        height: '50%',
        justifyContent: 'center'
    },

    alignButtons : {
        height: 200,
        justifyContent:'space-around'
    },

    text : {
        color: 'black',
        fontSize: 50
    }
})

export default ChooseSign;