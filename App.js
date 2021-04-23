import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import HomeHeaderView from './views/home_view/HomeView'
import HomeScreenTabs from './views/util_view/HomeScreenTabs';

import { NavigationContainer } from '@react-navigation/native';


class App extends React.Component {

  render()
  {
    return (
      <SafeAreaView style={styles.globalParent}>
        <HomeHeaderView/>
        <NavigationContainer>
          <HomeScreenTabs/>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  globalParent : {
    backgroundColor: 'white',
    flex: 1,
  },
  globalChild : {
    margin: 10
  }
});

export default App;
