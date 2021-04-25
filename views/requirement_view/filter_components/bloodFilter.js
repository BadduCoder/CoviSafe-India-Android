import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


const BloodPicker = () => {
    return (
        <View style={styles.filterWrapper}>
            <Picker
                onValueChange={()=>alert("Hey")}
                style={styles.locationPicker}
                dropdownIconColor="green"
                mode="dialog"
            >
                <Picker.Item 
                    style={styles.locationPlaceholder} 
                    label="Jaipur" 
                    value="Jaipur"
                />
            </Picker>
            <Picker
                onValueChange={()=>alert("Hey")}
                style={styles.locationPlaceholder}
                dropdownIconColor="green"
                mode="dialog"
            >
                <Picker.Item 
                    style={styles.locationPlaceholder} 
                    label="O+" 
                    value="O+"
                />
            </Picker>
            <TouchableOpacity style={styles.filterButtonWrapper}>
                <Text style={styles.filterButton}>Filter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    filterWrapper:{
        marginHorizontal:20,
        flexDirection:'row',
        marginBottom:10
    },
    locationPicker:{
        paddingHorizontal:15,
        flex:1
    },
    locationPlaceholder:{
        fontSize : 18,
        fontFamily:'RedHatDisplay-Regular',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:15,
        flex:1,
        marginLeft:15    
    },
    typePlaceholder:{
        fontSize : 18,
        fontFamily:'RedHatDisplay-Medium',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:15,
        flex:1,
        marginLeft:15    
    },
    filterButtonWrapper:{
        paddingHorizontal:15,
        backgroundColor:'#5f875f',
        borderRadius:5,
        marginVertical:5,
        flex:1,
        justifyContent:'center'
    },
    filterButton:{
        fontFamily:'RedHatDisplay-Regular',
        fontSize : 18,
        color:'white'
    }
});

export default BloodPicker;