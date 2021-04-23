import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SupplyCard from './SupplyCard';


class SupplyView extends React.Component {

    supplyData = [
        {
            'id' : '1',
            'supplyType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '2',
            'supplyType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '3',
            'supplyType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '4',
            'supplyType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '5',
            'supplyType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '6',
            'supplyType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        },
        {
            'id' : '7',
            'supplyType' : "Plasma",
            'description' : "Blood Group O+",
            'city' : "Jaipur" 
        }
    ]; 

    supplyListDisplay = this.supplyData.map(supply => (
        <SupplyCard 
            key = {supply['id']}
            supplyType = {supply['supplyType']}
            description = {supply['description']}
            city = {supply['city']}
        />
    ));

    render() {
        return (
            <ScrollView>
                <View style={styles.supplyView}>
                    {this.supplyListDisplay}
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    supplyView : {
        flex: 1
    }
});

export default SupplyView;
