import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';


class AddView extends React.Component {

  render()
  {
    return (
          <View style ={styles.addFormParent}>
            <Text style={styles.addForm}>Add Requirement/Supply</Text>

            <TextInput style={styles.inputForm} placeholder="Full Name"/>
            <TextInput style={styles.inputForm} placeholder="Primary Contact"/>
            <TextInput style={styles.inputForm} placeholder="Email"/>
            
            <TouchableOpacity style={styles.submitButton}>
                <Text style={{textAlign:'center', fontSize:15}}>REGISTER</Text>
            </TouchableOpacity>
            
          </View>
    );
  };
};

const styles = StyleSheet.create({
    addForm : {
        textAlign : 'center',
        fontSize : 20,
        color: 'white'
    },
    addFormParent:{
        flex:1,
        color: 'white',
        backgroundColor:'#6d7194',
        padding:15,
    },
    submitButton:{
        backgroundColor: 'white',
        padding:20,
        borderRadius: 20
    }
});

export default AddView;
