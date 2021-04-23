import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';


class HomeHeaderView extends React.Component {

  render()
  {
    return (
          <View>
            <Text style={styles.homeHeader}>COVISAFE INDIA</Text>
          </View>
    );
  };
};

const styles = StyleSheet.create({
    homeHeader : {
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize : 25,
        padding : 20,
        backgroundColor:'#A997DF',
        color : '#DCCFEC'
    }
});

export default HomeHeaderView;
