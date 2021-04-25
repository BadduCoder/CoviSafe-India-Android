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

            <TextInput style={styles.inputForm} placeholder="Requirement Type"/>
            <TextInput style={styles.inputForm} placeholder="Requirement description"/>
            <TextInput style={styles.inputForm} placeholder="Primary Contact"/>
            <TextInput style={styles.inputForm} placeholder="Secondary Contact"/>
            <TextInput style={styles.inputForm} placeholder="Location"/>
            

            <TouchableOpacity style={styles.submitButton}>
                <Text style={{textAlign:'center', fontSize:15}}>ADD DATA</Text>
            </TouchableOpacity>
            
          </View>
    );
  };
};

const styles = StyleSheet.create({
    addForm : {
        textAlign : 'center',
        fontSize : 20,
        color: 'white',
        marginTop:10
    },
    addFormParent:{
        flex:1,
        color: 'white',
        backgroundColor:'#666666',
        padding:15,
    },
    submitButton:{
        backgroundColor: 'white',
        padding:10,
        borderRadius: 20,
        marginTop:30,
        backgroundColor:'#EEEEEE'
    }
});

export default AddView;
