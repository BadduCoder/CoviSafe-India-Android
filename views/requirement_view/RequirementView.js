import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { 
    OxygenSupplierCard, 
    BloodDonorCard,
    HospitalBedCard 
} from './requirement_cards/allCards';
import { 
    oxygenRequirementData, 
    bloodRequirementData,
    hospitalRequirementData 
} from './dummy_data/allData';

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
            requirementCardData = oxygenRequirementData.map(requirement => (
                <OxygenSupplierCard 
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
        else if(routeData.requirementType === "Blood / Plasma")
        {
            requirementCardData = bloodRequirementData.map(requirement => (
                <BloodDonorCard 
                    key = {requirement.id}
                    entityName = {requirement.entityName}
                    requirementName = {requirement.requirementName}
                    primaryContact = {requirement.primaryContact}
                    secondaryContact = {requirement.secondaryContact}
                    location = {requirement.location}
                    verified = {requirement.verified}
                    blood = {requirement.blood}
                    plasma = {requirement.plasma}
                />
            ));
        }
        else if(routeData.requirementType === "Hospital Beds")
        {
            requirementCardData = hospitalRequirementData.map(requirement => (
                <HospitalBedCard 
                    key = {requirement.id}
                    entityName = {requirement.entityName}
                    primaryContact = {requirement.primaryContact}
                    secondaryContact = {requirement.secondaryContact}
                    location = {requirement.location}
                    verified = {requirement.verified}
                    icu = {requirement.icu}
                    normal = {requirement.normal}
                />
            ));
        }
        if(requirementCardData === null)
            return <Text style={{
                alignSelf:'center', 
                fontFamily:'RedHatDisplay-Bold',
                fontSize:20,
                alignItems:'center',
                marginTop:'70%'
                }}>Coming Soon!</Text>;
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
