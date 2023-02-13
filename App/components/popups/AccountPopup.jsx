import React from 'react';
import { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    useWindowDimensions
} from 'react-native';
import CloseButton from '../buttons/CloseButton';
import NegativeButton from '../buttons/NegativeButton';
import PositiveButton from '../buttons/PositiveButton';

const AccountPopup =( props )=> {

    const { height } = useWindowDimensions();

    const[clickedLogout, setClickedLogout] = useState(false)

    return (
        <View style={[styles.popup, {height}]}>
            { !clickedLogout &&
                <View style={styles.accountBox}>
                    <View style={styles.align}>
                        <View style={styles.details}>
                            <Image style={styles.accountLogo} source={require('../../Assets/Icons/Account.png')}/>
                            <View>
                                <Text style={styles.name}>F001: Jane Doe</Text>
                                <Text style={styles.email}>janedoe@gmail.com</Text>
                            </View>
                        </View>

                        <View style={styles.button}>
                            <PositiveButton Title='Log Out' press_Action={()=> setClickedLogout(true)}></PositiveButton>
                        </View>
                    </View>
                </View> 
            }

            { clickedLogout &&
                <View style={styles.logoutBox}>
                    <View style={styles.logoutHeader}>
                        <Text style={styles.logoutText}>Log Out</Text>
                        <CloseButton></CloseButton>
                    </View>

                    <View style={styles.logoutContents}>
                        <Text style={styles.logoutTitle}>Are you sure, you want to Log Out?</Text>

                        <View style={styles.chooseButtons}>
                            <View style={{ flex: 1, paddingRight:3 }}>
                                <PositiveButton Title='Log Out'></PositiveButton>
                            </View>

                            <View View style={{ flex: 1, paddingLeft:3 }}>
                                <NegativeButton Title='Cancel'></NegativeButton>
                            </View>
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    popup: {
        top:0,
        position:'absolute',
        width:'100%',
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        zIndex:2,
    },

    accountBox: {
        position:'absolute',
        top:'6.3%',
        right:'5%',
        height:218,
        width:177,
        backgroundColor:'white',
        borderRadius:9,
        justifyContent:'center',
    },

    align: {
        height:'75%',
        justifyContent:'space-between'
    },

    details: {
        flexDirection:'row',
        alignItems:'center',
    },

    accountLogo: {
        height:35,
        width:35,
        marginRight:6,
        marginLeft:7
    },

    name : {
        color: 'black',
        fontSize: 14,
        fontWeight: 700
    },

    email: {
        color:'#989595',
        fontSize:11
    },

    button: {
        paddingHorizontal:10,
        marginBottom: 15
    },

    logoutBox: {
        top:150,
        marginHorizontal:40,
        aspectRatio:1.4,
        backgroundColor:'white',
        borderRadius:9
    },

    logoutContents: {
        marginTop:35,
        height:90,
        alignItems:'center', 
        justifyContent:'space-between',
    },

    logoutTitle: {
        fontSize: 16,
        fontWeight: 500,
        color: 'black'
    },

    chooseButtons: {
        flexDirection: 'row',
        width:'75%'
    },

    logoutHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderStyle:'solid',
        borderBottomWidth:1,
        alignItems:'center',
        height:33,
        paddingHorizontal:7
    },

    logoutText: {
        color: 'black',
        fontSize:16,
        fontWeight:700,
        marginLeft:7
    },

})

export default AccountPopup;