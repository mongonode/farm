import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SquareButton from '../../components/buttons/SquareButton';
import HomeHeader from '../../components/headers/HomeHeader';

const Home =( { navigation } )=> {

    return (
        <View style={styles.body}>
            <HomeHeader logout_Action={()=> navigation.navigate('ChooseRole')}></HomeHeader>

            <View style={styles.separater}/>

            <View style={styles.align}>
                <SquareButton Title_1='My' Title_2='Crops'></SquareButton>
                <SquareButton Title_1='Market' Title_2='Conditions' press_Action={()=> navigation.navigate('MarketConditions')}></SquareButton>
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