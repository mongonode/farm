import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LongButton from '../../components/buttons/LongButton';
import SquareButton from '../../components/buttons/SquareButton';
import HomeHeader from '../../components/headers/HomeHeader';
import LoginHeader from '../../components/headers/LoginHeader';

const Home =()=> {

    return (
        <View style={styles.body}>
            <HomeHeader></HomeHeader>

            <View style={styles.separater}/>

            <View style={styles.align}>
                <SquareButton Title_1='My' Title_2='Crops'></SquareButton>
                <SquareButton Title_1='Market' Title_2='Conditions'></SquareButton>
            </View>

            <View style={styles.align}>
                <SquareButton Title_1='Crop' Title_2='Recommendations'></SquareButton>
                <SquareButton Title_1='Crop' Title_2='Advisiors'></SquareButton>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    body : {
        flex:1,
    },

    separater : {
        marginTop:'11%'
    },

    align : {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default Home;