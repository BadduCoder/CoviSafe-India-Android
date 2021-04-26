import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


class OxygenFilter extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            city: null,
            secondParam: null
        }
    }
    
    oxygenTypeFilter = (_oxygenType) => {
        if(_oxygenType != '-') 
        {
            this.setState({
                secondParam: {
                'key' : 'oxygen_supply_type',
                'value' : _oxygenType
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
    
    render() {
        return (
            <View style={styles.filterWrapper}>
                <Picker
                    style={styles.locationPicker}
                    dropdownIconColor="green"
                    mode="dialog"
                    onValueChange = {(itemValue, _ )=>{this.locationFilter(itemValue)}}
                >
                    <Picker.Item 
                        style={styles.locationPlaceholder} 
                        label="Location" 
                        enabled={false} 
                        value="-"
                    />
                    <Picker.Item 
                        style={styles.locationPlaceholder} 
                        label="jaipur" 
                        value="jaipur"
                    />
                </Picker>
                <Picker
                    style={styles.typePicker}
                    dropdownIconColor="green"
                    mode="dialog"
                    onValueChange={(itemValue, _)=>{this.oxygenTypeFilter(itemValue)}}
                >
                    <Picker.Item 
                        style={styles.locationPlaceholder} 
                        label="Type"
                        enabled={false} 
                        value="-"
                    />
                    <Picker.Item 
                        style={styles.typePlaceholder} 
                        label="Concentrator" 
                        value="Concentrator"
                    />
                </Picker>
                <TouchableOpacity 
                    onPress = {this.filterData}
                    style={styles.filterButtonWrapper}
                >
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
        fontFamily:'RedHatDisplay-Regular',
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

export default OxygenFilter;