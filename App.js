import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';


import HomeHeaderView from './views/home_view/HomeView'
import HomeScreenTabs from './views/util_view/HomeScreenTabs';

import { NavigationContainer } from '@react-navigation/native';


GoogleSignin.configure({
  webClientId: '391217160000-ho57npb8ouvgmgbig3q22fpmtqkburu8.apps.googleusercontent.com'
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userGoogleInfo : {},
      loaded: false
    }
  }

  signIn = async() => {
    try{
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then((userData) => {
        this.setState({
          userGoogleInfo: userInfo,
          loaded: true
        });
      });
      
    }
    catch(error) {
      console.log(error);
      return false;
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  render()
  {
    return (
      <SafeAreaView style={styles.globalParent}>
        {this.state.loaded?
          <View>
            <Text style={{color:'black'}}>{this.state.userGoogleInfo.user.id}</Text>
          </View>:
          <GoogleSigninButton 
            onPress={this.signIn}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
          />
        }
      </SafeAreaView>
    );
  }
};
////<HomeHeaderView/>
/* <NavigationContainer>
<HomeScreenTabs/>
</NavigationContainer> */
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
