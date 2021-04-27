import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { 
    BloodDonorCard,
    HospitalBedCard, 
    OxygenSupplyCard
} from './requirement_cards/allCards';


import {BASE_SERVER_URL} from '@env';

import HeaderView from '../header_view/HeaderView';
import { BloodPicker, OxygenFilter } from './filter_components/allFilters';
import LoaderComponent from '../util_components/LoaderComponent';
import ComingSoonComponent from '../util_components/ComingSoonComponent';
import { REQUIREMENT_TYPE } from '../../utils/constants';


class RequirementView extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
            serverData : null,
            loaded : false,
            location : null,
        };
    }

    componentDidMount = () => {
        this.filterData();
    }
    
    filterData = (city, second_param = null) => {
        const requirementCode = this.props.route.params.requirementCode;
        this.getSupplyData(requirementCode, city, second_param);
    }

    getSupplyData = async (r_type, city=null, opt_param=null) => {
        /*
            This fetches the data according to filters mentioned:
            Requirement Type : Hardcoded from previous card selection
            Location : User Filter option
            Type (variable) : Only available in several cases
                    Like for plasma/blood (Blood Group Filter)            
        */

        let fetchURL = `${BASE_SERVER_URL}/supplies?format=json&r_type=${r_type}`
        
        if(city!= null)
            fetchURL += `&city=${city}`
        if(opt_param != null)
            fetchURL += `&${opt_param.key}=${opt_param.value}`

        fetch(fetchURL,{
            method: 'GET'
        }).then(response => response.json()).then(data=>{
            
            this.setState({
                serverData: data,
                loaded : true
            });

        });
    }

    getCorrespondingFilterComponent = () => {
        /*
            The only different thing in various views is filter,
            we fetch the dynamic filter according to card selected 
            by user in previous view, and return the specific filter.
        */
        const requirementCode = this.props.route.params.requirementCode;

        if(requirementCode === REQUIREMENT_TYPE.OXYGEN)
            return <OxygenFilter filterCallback={this.filterData}/>;
        else if(requirementCode === REQUIREMENT_TYPE.PLASMA_BLOOD)
            return <BloodPicker filterCallback={this.filterData}/>;
        return null;
    }

    requirementListDisplay = () => {
        /*
            Dynamic Card function :
            This displays card with data depending on previous selection of card.
            Navigator passes the requirementCode, which is used to identify the
            corresponding card and the data which needs to be fetched.

            Fallback :
                If no scenario is matched, a coming soon text is shown to user.
            Loader :
                Until the API call is successful, loader is shown to user.
        */
        
        const requirementCode = this.props.route.params.requirementCode;
        let requirementCardData = null;

        if(this.state.loaded)
        {
            switch(requirementCode)
            {
            case REQUIREMENT_TYPE.OXYGEN:
                requirementCardData = this.state.serverData.map(requirement => (
                    <OxygenSupplyCard 
                        key = {requirement.id}
                        oxygenData = {requirement}
                    />
                ));
                break;
            case REQUIREMENT_TYPE.PLASMA_BLOOD:
                requirementCardData = this.state.serverData.map(bloodData => (
                    <BloodDonorCard 
                        key = {bloodData.id}
                        bloodData = {bloodData}
                    />
                ));
                break;
            case REQUIREMENT_TYPE.HOSPITAL_BED:
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
        
        // Returns the child list in expanded form
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
