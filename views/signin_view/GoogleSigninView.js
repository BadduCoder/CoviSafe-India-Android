import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';

import {appLogo} from '../../utils/constants';

const GoogleSignInView = ({onPress, size, color}) => {

    return (
      <SafeAreaView style={styles.googleSignInParent}>
          <View style={styles.googleSignInChild}>
              <Image source={appLogo} style={styles.appWelcomeLogo}/>
              <Text style = {styles.welcomeBanner}>
                  Please Signin to continue!
              </Text>
                <GoogleSigninButton 
                    onPress={onPress}
                    size={size}
                    color={color}
                />
          </View>

      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    googleSignInParent : {
        backgroundColor: '#EEEEEE',
        flex: 1,
    },
    googleSignInChild : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    welcomeBanner : {
        fontSize : 14,
        margin : 20,
        fontFamily : 'RedHatDisplay-Regular'
    },
    appWelcomeLogo : {
        height: 200,
        width: 400
    }
});

export default GoogleSignInView;
