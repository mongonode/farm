import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import LongButton from '../../../components/buttons/LongButton';
import ThreeColumn from '../../../components/grids/ThreeColumn';
import BodyHeader from '../../../components/headers/BodyHeader';

const MyCrops =()=> {
   
    
    return (
        <View>
            <BodyHeader Title='My Crops'></BodyHeader>
            
            <View>
                <Text style={styles.text}>Crop Cultivation Plan</Text>
                <ThreeColumn Need='Harvesting Date'></ThreeColumn>
            </View>
            

           
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color:'black',
        fontSize:20
    }
})

export default MyCrops;