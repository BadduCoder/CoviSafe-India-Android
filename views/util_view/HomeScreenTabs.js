import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import RequirementView from '../requirement_view/RequirementView';
import SupplyView from '../supply_view/SupplyView';
import AddView from '../add_view/AddView';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const HomeScreenTabs = () => {

    return (
        <RootStack.Navigator tabBarOptions = {{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 10,
                backgroundColor: '#DDC4DD',
                borderRadius: 15,
                height: 90,
            }
            }}>
            <RootStack.Screen name="Requirements" component={RequirementView} options={{
                tabBarIcon: ({focused}) => (
                    <Icon name="tint" size={30} color="orange"/>
                ),
            }}/>
            <RootStack.Screen name="Add" component={AddView} options={{
                tabBarIcon: ({focused}) => (
                    <Icon name="plus" size={30} color="white"/>
                ),
            }}/>
            <RootStack.Screen name="Supplies" component={SupplyView} options={{
                tabBarIcon: ({focused}) => (
                    <Icon name="bed" size={30} color="green"/>
                ),
            }}/>
        </RootStack.Navigator>
    );
};

const RootStack = createBottomTabNavigator();

export default HomeScreenTabs;
