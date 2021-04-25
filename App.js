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

import HomeScreenView from './views/homescreen_view/HomeScreenView';
import GoogleSignInView from './views/signin_view/GoogleSigninView';
import RequirementView from './views/requirement_view/RequirementView';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RequirementCard from './views/requirement_view/RequirementCard';


const Stack = createStackNavigator();


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

  renderScreenCondition = () => {
    if(this.state.loaded)
    {
      return(
        <NavigationContainer>
            <Stack.Navigator
              initialRouteName="HomeScreen"
              screenOptions={{
                headerShown:false
              }}
            >
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreenView}
                />
                <Stack.Screen
                  name="Requirements"
                  component={RequirementView}
                />
            </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return(
      <View style={styles.googleSignInWrapper}>
        <GoogleSignInView 
            onPress={this.signIn}
            size={GoogleSigninButton.Size.Standard}
        />
      </View>
    );
      
  }

  render()
  {
    return this.renderScreenCondition();
  }
};

const styles = StyleSheet.create({
  globalParent : {
    backgroundColor:'#FFFFFF',
    flex:1
  },
  globalChild : {
    margin: 10,
  },
  googleSignInWrapper:{
    flex:1
  }
});

export default App;
