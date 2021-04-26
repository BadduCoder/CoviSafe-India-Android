import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { 
    BloodDonorCard,
    HospitalBedCard, 
    OxygenSupplyCard
} from './requirement_cards/allCards';
import { 
    oxygenRequirementData, 
    bloodRequirementData,
    hospitalRequirementData 
} from './dummy_data/allData';

import {BASE_SERVER_URL} from '@env';

import HeaderView from '../header_view/HeaderView';
import { BloodPicker, OxygenFilter } from './filter_components/allFilters';
import LoaderComponent from '../util_components/LoaderComponent';
import ComingSoonComponent from '../util_components/ComingSoonComponent';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';


class RequirementView extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
            serverData : null,
            loaded : false
        };
    }
    
    getSupplyData = async (r_type) => {
        fetch(`${BASE_SERVER_URL}/supplies?format=json&r_type=${r_type}`,{
            method: 'GET'
        }).then(response => response.json()).then(data=>{
            
            this.setState({
                serverData: data,
                loaded : true
            });

        });
    }

    componentDidMount = () => {
        const routeData = this.props.route.params;
        let requiredData = null;
        if(routeData.requirementType === "Oxygen")
            requiredData="OXY";
        else if(routeData.requirementType === "Blood / Plasma")
            requiredData="PLM"
        else if(routeData.requirementType === "Hospital Beds")
            requiredData="HBD"
        console.log(requiredData)
        this.getSupplyData(requiredData);
    }

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

        if(this.state.loaded)
        {
            switch(routeData.requirementType)
            {
            case "Oxygen":
                requirementCardData = this.state.serverData.map(requirement => (
                    <OxygenSupplyCard 
                        key = {requirement.id}
                        oxygenData = {requirement}
                    />
                ));
                break;
            case "Blood / Plasma":
                requirementCardData = this.state.serverData.map(bloodData => (
                    <BloodDonorCard 
                        key = {bloodData.id}
                        bloodData = {bloodData}
                    />
                ));
                break;
            case "Hospital Beds":
                requirementCardData = this.state.serverData.map(bedData => (
                    <HospitalBedCard 
                        key = {bedData.id}
                        bedData = {bedData}
                    />
                ));
                break;
            default:
                    return <ComingSoonComponent/>;
            }
        }
        else
            return <LoaderComponent/>;
                
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
