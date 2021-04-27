import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


class BloodPicker extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            city: null,
            secondParam: null
        }
    }
    
    bloodGroupFilter = (_bloodGroup) => {
        if(_oxygenType != '-') 
        {
            this.setState({
                secondParam: {
                'key' : 'blood_group',
                'value' : _bloodGroup
                }
            });
        }
    }

    locationFilter = (_city) => {
        this.setState({
            city: _city
        })
    }

    filterData = () => {
        this.props.filterCallback(this.state.city, this.state.secondParam);
    }
    
    render()
    {
        return (
            <View style={styles.filterWrapper}>
                <Picker
                    onValueChange={(itemValue, _)=>{this.locationFilter(itemValue)}}
                    style={styles.locationPicker}
                    dropdownIconColor="green"
                    mode="dialog"
                >
                    <Picker.Item 
                        style={styles.locationPlaceholder} 
                        label="Location" 
                        value="-"
                        enable={false}
                    />
                    <Picker.Item 
                        style={styles.locationPlaceholder} 
                        label="jaipur" 
                        value="jaipur"
                    />
                </Picker>
                <Picker
                    onValueChange={(itemValue, _)=>this.bloodGroupFilter(itemValue)}
                    style={styles.typePicker}
                    dropdownIconColor="green"
                    mode="dialog"
                >
                    <Picker.Item 
                        style={styles.locationPlaceholder} 
                        label="Blood Group" 
                        value="-"
                    />
                    <Picker.Item 
                        style={styles.locationPlaceholder} 
                        label="O+" 
                        value="O+"
                    />
                </Picker>
                <TouchableOpacity onPress={this.filterData} style={styles.filterButtonWrapper}>
                    <Text style={styles.filterButton}>Filter</Text>
                </TouchableOpacity>
            </View>
        );
    };
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
    typePicker:{
        paddingHorizontal:15,
        flex:1
    },
    locationPlaceholder:{
        fontSize : 15,
        fontFamily:'RedHatDisplay-Regular',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:15,
        flex:1,
        marginLeft:15    
    },
    typePlaceholder:{
        fontSize : 15,
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
        fontSize : 15,
        color:'white'
    }
});

export default BloodPicker;