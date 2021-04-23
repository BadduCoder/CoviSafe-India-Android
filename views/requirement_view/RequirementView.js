import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import RequirementCard from './RequirementCard';


class RequirementView extends React.Component {

    requirementData = [
        {
            'id' : '1',
            'requirementType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '2',
            'requirementType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '3',
            'requirementType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '4',
            'requirementType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '5',
            'requirementType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '6',
            'requirementType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '7',
            'requirementType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        }
    ]; 

    requirementListDisplay = this.requirementData.map(requirement => (
        <RequirementCard 
            key = {requirement['id']}
            requirementType = {requirement['requirementType']}
            description = {requirement['description']}
            city = {requirement['city']}
        />
    ));

    render() {
        return (
            <ScrollView>
                <View style={styles.requirementView}>
                    {this.requirementListDisplay}
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    requirementView : {
        flex: 1
    }
});

export default RequirementView;
