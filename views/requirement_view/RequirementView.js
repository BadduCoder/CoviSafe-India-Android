import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import RequirementCard from './RequirementCard';
import requirementData from './requirementsData';
import HeaderView from '../header_view/HeaderView';
import { BloodPicker, OxygenFilter } from './filter_components/allFilters';


class RequirementView extends React.Component { 

    getCorrespondingFilterComponent = () => {
        /*
            The only different thing in various views is filter,
            we fetch the dynamic filter according to card selected 
            by user in previous view, and return the specific filter.
        */
        const routeData = this.props.route.params;

        if(routeData.requirementType === "Oxygen")
            return <OxygenFilter/>;
        else if(routeData.requirementType === "Blood / Plasma")
            return <BloodPicker/>;

        return null;
    }

    requirementListDisplay = () => {
        
        const routeData = this.props.route.params;
        let requirementCardData = null;

        if(routeData.requirementType === "Oxygen")
        {
            requirementCardData = requirementData.map(requirement => (
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
        }
        if(requirementCardData === null)
            return null;
        return [...requirementCardData];
    }

    render() {
        return (
            <View>
                <HeaderView/>
                {this.getCorrespondingFilterComponent()}
                <ScrollView>
                    <View style={styles.requirementView}>
                        {this.requirementListDisplay()}
                    </View>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    requirementView : {
        flex: 1,
        marginBottom:'50%',
    }
});

export default RequirementView;
