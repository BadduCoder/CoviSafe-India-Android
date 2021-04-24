import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';

import {GOOGLE_FIREBASE_CLIENT_ID} from '@env';

import HomeHeaderView from './views/home_view/HomeView'
import HomeScreenTabs from './views/util_view/HomeScreenTabs';
import GoogleSignInView from './views/signin_view/GoogleSigninView';

import { NavigationContainer } from '@react-navigation/native';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userGoogleInfo : {},
      loaded: false
    }
  }

  componentDidMount = () => {
    GoogleSignin.configure({
      webClientId: `${GOOGLE_FIREBASE_CLIENT_ID}`
    });
  }

  signIn = async() => {
    try{
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then((userInfo) => {
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
          <SafeAreaView style={styles.globalParent}>
            <HomeHeaderView/>
            <NavigationContainer>
              <HomeScreenTabs/>
            </NavigationContainer>
          </SafeAreaView>
          :
          <GoogleSignInView 
            onPress={this.signIn}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
          />
        }
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
