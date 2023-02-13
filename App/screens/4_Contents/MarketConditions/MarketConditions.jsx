import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PositiveButton from '../../../components/buttons/PositiveButton';
import BodyHeader from '../../../components/headers/BodyHeader';
import SelectionDropdown from '../../../components/inputs/SelectionDropdown';
import DoubleTab from '../../../components/sub-headers/DoubleTab';

const MarketConditions =()=> {

    const[leftTab, setLeftTab] = useState(true)

    const Crops = [
        'A','B', 'C', 'D'
    ]

    const Regions = [
        'a', 'b', 'c', 'd'
    ]

    const[crop, setCrop] = useState('')
    const[region, setRegion] = useState('')

    return (
        <View style={{flex:1}}>
            <BodyHeader Title='Market Conditions'></BodyHeader>

            <DoubleTab 
                    LeftButton='Current Market Conditions' 
                    press_LeftAction={()=> setLeftTab(true)}
                    RightButton='Foretasted Market Conditions'
                    press_RightAction={()=> setLeftTab(false)}>
            </DoubleTab>

            <View style={styles.form}>
                <SelectionDropdown Label='Select Crop' List={Crops} Selected={setCrop}></SelectionDropdown>
                <SelectionDropdown Label='Select Region'></SelectionDropdown>

                <View style={{marginHorizontal:'30%'}}>
                    <PositiveButton Title='Enter' press_Action={()=>console.log(crop)}></PositiveButton>
                </View>
            </View>

        </View>
    ) 
}

const styles = StyleSheet.create({
    form: {
        marginHorizontal:'9%',
        height:145,
        justifyContent:'space-between'
    }
})

export default MarketConditions;