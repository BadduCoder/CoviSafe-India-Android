import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { call } from 'react-native-reanimated';
// import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ContactComponent = ({primaryContact, secondaryContact}) => {

    const callContact = (contact) => {
        RNImmediatePhoneCall.immediatePhoneCall(contact);
    }

    return (
        <View>
            <View style={styles.contactWrapper}>
                <Text style={styles.primaryContact}>Primary contact : {primaryContact}</Text>
                <TouchableOpacity onPress={callContact(primaryContact)}>
                    <MaterialIcons style={styles.callIcon} name="call" size={25}/>
                </TouchableOpacity>
            </View>
            <View style={styles.contactWrapper}>
                <Text style={styles.secondaryContact}>Secondary contact : {secondaryContact}</Text>
                <TouchableOpacity onPress={callContact(secondaryContact)}>
                    <MaterialIcons style={styles.callIcon} name="call" size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    primaryContact:{
        fontFamily:'RedHatDisplay-Medium',
        marginTop:10
    },
    secondaryContact:{
        fontFamily:'RedHatDisplay-Medium',
        marginTop:10
    },
    contactWrapper:{
        flexDirection:'row',
        alignItems:'center',
    },
    callIcon:{
        marginTop:10,
        marginHorizontal:10
    }
});

export default ContactComponent;