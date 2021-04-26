import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import HomeSelectCard from '../homescreen_view/homeSelectionCard';
import cardsData from './homeScreenCardData';

import HeaderView from '../header_view/HeaderView';

class HomeScreenView extends React.Component {

    onCardClick = (requirementCode) => {
        this.props.navigation.navigate("Requirements", {
            requirementCode:requirementCode
        });
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
                                        onClick = {() => this.onCardClick(cardData.code)}
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
