import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView
} from 'react-native';

import RequirementView from '../requirement_view/RequirementView';
import SupplyView from '../supply_view/SupplyView';
import AddView from '../add_view/AddView';
import HomeSelectCard from '../homescreen_view/homeSelectionCard';
import cardsData from './homeScreenCardData';

import HeaderView from '../header_view/HeaderView';

class HomeScreenView extends React.Component {

    onCardClick = () => {
        this.props.navigation.navigate("Requirements");
    }

    render()
    {
        return (
            <View style={styles.globalParent}>
                <View styles={styles.globalChild}>
                    <HeaderView/>
                    <View style={styles.homeViewWrapper}>
                        <ScrollView contentContainerStyle={styles.cardsWrapper}>
                            {cardsData.map((cardData)=>{
                                return ( 
                                    <HomeSelectCard
                                        key = {cardData.id}
                                        text = {cardData.text}
                                        icon = {cardData.icon}
                                        onClick = {this.onCardClick}
                                    />
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    homeViewWrapper:{
        marginHorizontal : 20,
    },
    cardText:{
        color:'black'
    },
    cardsWrapper:{
        paddingBottom:300
    }
});


export default HomeScreenView;
