import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import RequirementCard from './RequirementCard';
import requirementData from './requirementsData';
import HeaderView from '../header_view/HeaderView';

import {Picker} from '@react-native-picker/picker';

class RequirementView extends React.Component { 

   
    requirementListDisplay = requirementData.map(requirement => (
        <RequirementCard 
            key = {requirement.id}
            entityName = {requirement.entityName}
            requirementName = {requirement.requirementName}
            primaryContact = {requirement.primaryContact}
            secondaryContact = {requirement.secondaryContact}
            location = {requirement.location}
            verified = {requirement.verified}
        />
    ));

    render() {
        return (
            <View>
                <HeaderView/>
                <View style={styles.filterWrapper}>
                    <Picker
                        onValueChange={()=>alert("Hey")}
                        style={styles.locationPlaceholder}
                        dropdownIconColor="green"
                        mode="dialog"
                    >
                        <Picker.Item label="Jaipur" value="Jaipur"/>
                        <Picker.Item label="Raipur" value="Raipur"/>
                        <Picker.Item label="Jabalpur" value="Jabalpur"/>
                    </Picker>
                    <Picker
                        onValueChange={()=>alert("Hey")}
                        style={styles.locationPlaceholder}
                        dropdownIconColor="green"
                        mode="dialog"
                    >
                        <Picker.Item label="O+" value="O+"/>
                        <Picker.Item label="B+" value="B+"/>
                        <Picker.Item label="O-" value="O-"/>
                    </Picker>
                </View>
                <ScrollView>
                    <View style={styles.requirementView}>
                        {this.requirementListDisplay}
                    </View>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    requirementView : {
        flex: 1,
        marginBottom:120,
    },
    filterWrapper:{
        marginHorizontal:20,
        flexDirection:'row',
        marginBottom:10
    },
    locationPlaceholder:{
        fontSize : 18,
        fontFamily:'RedHatDisplay-Medium',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:15,
        flex:1
    },
    typePlaceholder:{
        fontSize : 18,
        fontFamily:'RedHatDisplay-Medium',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:15,
        flex:1,
        marginLeft:15    
    }
});

export default RequirementView;
