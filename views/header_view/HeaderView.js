import React from 'react';

import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { appLogoHeader } from '../../utils/constants';


class HeaderView extends React.Component {

  render()
  {
    return (
      <View>
        <Image source={appLogoHeader} style={styles.headerLogo}/>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  headerLogo:{
      height:100,
      width:300,
      alignSelf:'center'
  }
});

export default HeaderView;
