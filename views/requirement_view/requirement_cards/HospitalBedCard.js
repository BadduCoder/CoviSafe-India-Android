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
    hospitalIcon, 
    locationIcon, 
    checkIcon, 
    warningIcon 
} from '../../../utils/constants';
import ContactComponent from '../../util_components/ContactDetailComponent';

const OxygenSupplierCard = ({ 
    entityName,
    primaryContact,
    secondaryContact,
    location,
    verified,
    icu,
    normal
}) => {

  return (
        <View style={styles.requirementCard}>
            <View style={styles.entityWrapper}>
                <Image source={hospitalIcon} style={styles.hospitalIcon}/>
                <Text style={styles.entityName}>{entityName}</Text>
                {
                    verified?
                    <Image source={checkIcon} style={styles.requirementIcon}/>
                    :
                    <Image source={warningIcon} style={styles.requirementIcon}/>
                }
            </View>
            <View style={styles.descriptionWrapper}>
                <View style={styles.requirementWrapper}>
                    <Text style={styles.icuBedText}>ICU : {icu}</Text>
                    <Text style={styles.normalBedText}>Normal : {normal}</Text>
                </View>
                <ContactComponent 
                    primaryContact = {primaryContact}
                    secondaryContact = {secondaryContact}
                />
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
        marginTop:10
    },
    entityName:{
        fontFamily:'RedHatDisplay-Bold',
        fontSize:20,
        marginLeft:10
    },
    normalBedText :{
        fontFamily:'RedHatDisplay-Medium',
        marginLeft:'20%'
    },
    icuBedText:{
        fontFamily:'RedHatDisplay-Medium',
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
        marginLeft:40
    }
});

export default OxygenSupplierCard;
