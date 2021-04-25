import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { 
    donorIcon, 
    locationIcon, 
    checkIcon, 
    warningIcon 
} from '../../../utils/constants';


const BloodDonorCard = ({ 
    entityName,
    requirementName,
    primaryContact,
    secondaryContact,
    location,
    verified,
    blood,
    plasma
}) => {

  return (
        <View style={styles.requirementCard}>
            <View style={styles.entityWrapper}>
                <Image source={donorIcon} style={styles.hospitalIcon}/>
                <Text style={styles.entityName}>{entityName}</Text>
                <Text style={styles.requirementName}>(BG : {requirementName})</Text>
            </View>
            <View style={styles.descriptionWrapper}>
                <View style={styles.requirementWrapper}>
                    <View style={styles.bloodRequirementWrapper}>
                        <Text style={styles.bloodDonor}>Blood</Text>
                        {
                            blood?
                            <Image source={checkIcon} style={styles.requirementIcon}/>
                            :
                            <Image source={warningIcon} style={styles.requirementIcon}/>
                        }
                    </View>
                    <View style={styles.plasmaRequirementWrapper}>
                        <Text style={styles.bloodDonor}>Plasma</Text>
                        {
                            plasma?
                            <Image source={checkIcon} style={styles.requirementIcon}/>
                            :
                            <Image source={warningIcon} style={styles.requirementIcon}/>
                        }
                    </View>
                </View>
                <Text style={styles.primaryContact}>Primary contact : {primaryContact}</Text>
                <Text style={styles.secondaryContact}>Secondary contact : {secondaryContact}</Text>
            </View>
            <View style={styles.locationWrapper}>
                <Image source={locationIcon} style={styles.locationIcon}/>
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
    requirementCard : {
        margin : 10,
        marginHorizontal:20,
        backgroundColor: '#C9C9C9',
        padding: 10,
        borderRadius:5,
        marginBottom : 20
    },
    entityWrapper:{
        marginTop:10,
        marginHorizontal:5,
        flexDirection:'row',
        alignItems:'center'
    },
    locationWrapper:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',    
        justifyContent:'center'
    },
    hospitalIcon:{
        width:30,
        height:30,
    },
    locationIcon:{
        width:30,
        height:30
    },
    requirementIcon:{
        height:20,
        width:20,
        marginLeft:10
    },
    requirementWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
    },
    bloodRequirementWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    plasmaRequirementWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        marginLeft: 80
    },
    entityName:{
        fontFamily:'RedHatDisplay-Bold',
        fontSize:20,
        marginLeft:10
    },
    requirementName:{
        fontFamily:'RedHatDisplay-Medium',

        marginLeft:20,
        alignItems:'center'
    },
    primaryContact:{
        fontFamily:'RedHatDisplay-Medium',
        marginTop:10
    },
    secondaryContact:{
        fontFamily:'RedHatDisplay-Medium',
        marginTop:10
    },
    location:{
        fontFamily:'RedHatDisplay-Regular',
        alignSelf:'center',
        marginTop:10,
        marginLeft:10
    },
    descriptionWrapper:{
        marginLeft:40,
    },
    bloodDonor:{

    }
});

export default BloodDonorCard;
