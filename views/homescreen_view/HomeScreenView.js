import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  SafeAreaView
} from 'react-native';

import RequirementView from '../requirement_view/RequirementView';
import SupplyView from '../supply_view/SupplyView';
import AddView from '../add_view/AddView';
import HomeSelectCard from '../homescreen_view/homeSelectionCard';
import cardsData from './homeScreenCardData';

class HomeScreenView extends React.Component {

    onCardClick = () => {
        alert("Hellow")
    }

    renderCards = (item) => {
        return(
            <HomeSelectCard
                text = {item.item.text}
                icon = {item.item.icon}
                onClick = {this.onCardClick}
            />
        );
    }

    render()
    {
        return (
            <View style={styles.homeViewWrapper}>
                <View>
                    <TextInput 
                        style={styles.locationFilter} 
                        placeholder={"Location"} 
                        placeholderTextColor="black" 
                    />
                </View>
                <View style={styles.cardsWrapper}>
                    <FlatList
                        data={cardsData}
                        renderItem={this.renderCards}
                        keyExtractor={(card) => card.id}
                    />
                </View>
            </View>
            
        );
    }
};


const styles = StyleSheet.create({
    homeViewWrapper:{
        marginHorizontal : 20,
    },
    locationFilter:{
        color:'black',
        fontSize : 18,
        borderWidth : 1,
        borderRadius : 5,
        marginTop : 10,
        paddingHorizontal:20
    },
    cardText:{
        color:'black'
    },
    cardsWrapper: {
        marginTop: 20
    }
});


export default HomeScreenView;
