import React, {useEffect} from 'react';


import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';

const Receivers =( props )=> {

    const openChat = props.OpenChat
    const messages = props.Data

    useEffect(() => {
        console.log(messages)
    }, []);
    return (
        <View>
            <TouchableOpacity onPress={props.press_Action}>
                <View style={styles.button}>
                    <View style={styles.name}>
                        <Image style={styles.image} source={require('../../Assets/Icons/Account.png')}/>
                        <Text style={styles.title}>{ props.Sender }</Text>
                    </View>

                    <View style={styles.name}>
                        <View style={styles.notification}><Text>1</Text></View>
                        <Image style={styles.image} source={require('../../Assets/Icons/Expand.png')}/>
                    </View>
                </View>
            </TouchableOpacity>

            {openChat && (
                <View style={styles.chatBox}>
                    <View style={styles.scroller}>
                        {messages.map((msg) => (
                            <View>
                                {props.Role == 'Advisior' && (
                                    <View style={[msg.type == 'farmer' ? styles.f : styles.a]}>
                                        <View style={[styles.sender, msg.type == 'farmer' ? styles.farmer : styles.advisor]}>
                                            <Text style={styles.msg}>{msg.message}</Text>
                                        </View>
                                    </View>
                                )}

                                {props.Role == 'Farmer' && (
                                    <View style={[msg.type == 'farmer' ? styles.a : styles.f]}>
                                        <View style={[styles.sender, msg.type == 'farmer' ? styles.advisor : styles.farmer]}>
                                            <Text style={styles.msg}>{msg.message}</Text>
                                        </View>
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>

                    <View>

                    </View>
                </View>
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginHorizontal:6,
        marginVertical:6,
        paddingHorizontal:10,
        backgroundColor: 'white',
        borderStyle:'solid',
        borderWidth:1,
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height:38,
    },

    title: {
        marginLeft:6,
        color: 'black',
        fontWeight: 700,
        fontSize: 16
    },

    name : {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'flex-start'
    },

    image: {
        height:20,
        width:20
    },

    notification : {
        height:20,
        width:20,
        borderRadius:30,
        backgroundColor:'#005F41',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    },

    chatBox : {
        marginTop:-7,
        height:300,
        backgroundColor:'white',
        borderStyle:'solid',
        borderWidth:1,
        borderTopWidth:0,
        marginHorizontal:6,
    },

    msg: {
        color:'white',
        fontSize:16,
        
    },

    scroller: {
        overflow:'scroll',
    },

    sender: {
        maxWidth:220,
        paddingHorizontal:7,
        marginVertical:6,
        paddingVertical:6
    },

    farmer : {
        backgroundColor:'black',
    },

    advisor : {
        backgroundColor:'grey'
    },

    f: {
        paddingLeft:10,
        display:'flex',
        alignItems:'flex-start'
    },

    a:{
        paddingRight:10,
        display:'flex',
        alignItems:'flex-end'
    }

})

export default Receivers;