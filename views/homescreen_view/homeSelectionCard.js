import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeSelectCard = ({icon, text, onClick}) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={styles.singleCardWrapper}>
                <Image source={icon} style={styles.selectionCardIcon}/>
                <Text style={styles.selectionCardText}>{text}</Text> 
                <MaterialIcons name="keyboard-arrow-right" size={20} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    singleCardWrapper : {
        backgroundColor:'#C9C9C9',
        borderRadius : 5,
        flexDirection:'row',
        marginTop: 20,
        padding: 20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    selectionCardIcon : {
        height:60,
        width:60
    },
    selectionCardText:{
        fontFamily:'RedHatDisplay-Bold'
    }
});

export default HomeSelectCard;