import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


const SupplyCard = ({ supplyType, description, city}) => {

  return (
        <View style={styles.supplyCard}>
            <Text>Supply Type : {supplyType} </Text>
            <Text>Description : {description}</Text>
            <Text>City : {city}</Text>
            <TouchableOpacity >
                <Text style={styles.detailButton}>View details</Text>
            </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
    supplyCard : {
        margin : 10,
        backgroundColor: '#dccfec',
        padding: 10,
        borderRadius:15
    },
    detailButton : {
        textAlign: 'center',
        fontSize : 18,
        marginTop : 10,
        marginBottom: 5,
        backgroundColor : '#A997DF',
        borderRadius: 5
    }
});

export default SupplyCard;
