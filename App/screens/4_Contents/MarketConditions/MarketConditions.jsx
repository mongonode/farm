import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import BodyHeader from '../../../components/headers/BodyHeader';
import DoubleTab from '../../../components/sub-headers/DoubleTab';

const MarketConditions =()=> {

    const[leftTab, setLeftTab] = useState(true)

    return (
        <View style={{flex:1}}>
            <BodyHeader Title='Market Conditions'></BodyHeader>

            <DoubleTab 
                    LeftButton='Current Market Conditions' 
                    press_LeftAction={()=> console.log('Left')}
                    RightButton='Foretasted Market Conditions'
                    press_RightAction={()=> console.log('Right')}>
            </DoubleTab>

        </View>
    ) 
}

export default MarketConditions;