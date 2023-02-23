import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const ThreeColumn =( props )=> {

    return (
        <View>
            <View style={styles.titles}>
                <View style={styles.tabCrop}><Text>Crop</Text></View>
                <View style={styles.tabDate}><Text>Cultivation Start Date</Text></View>
                <View style={styles.tabDate}><Text>{props.Need}</Text></View>
            </View>

            <View>
               {/* Three data column */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titles: {
        display:'flex',
        flexDirection:'row'
    },
 
    tabCrop:{
        width: '30%',
        backgroundColor:'#005F41',
        display:'flex',
        alignItems:'center',
        paddingVertical:5
    },
  
    tabDate: {
        width:'35%',
        backgroundColor:'#005F41',
        borderStyle:'solid',
        borderLeftWidth:1,
        borderColor:'white',
        display:'flex',
        alignItems:'center',
        paddingVertical:5
    }
})

export default ThreeColumn;