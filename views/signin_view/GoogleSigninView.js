import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from '@react-native-community/google-signin';


const GoogleSignInView = ({onPress, size, color}) => {

    return (
      <SafeAreaView style={styles.googleSignInParent}>
          <View style={styles.googleSignInChild}>
              <Text style = {styles.welcomeBanner}>
                  Welcome to CoviSafe India!
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
        backgroundColor: '#DDC4DD',
        flex: 1,
    },
    googleSignInChild : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    welcomeBanner : {
        fontSize : 20,
        margin : 20,
    }
});

export default GoogleSignInView;
