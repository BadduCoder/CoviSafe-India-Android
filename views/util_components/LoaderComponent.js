import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import { loaderIcon } from '../../utils/constants';

const LoaderComponent = () => {
    return (
        <View style={{
            alignItems:'center',
            marginTop:'40%',
            flex:1
        }}>
            <Image 
                source={loaderIcon}
                style={{
                    height:100,
                    width:100
                }}
            />
            <Text style={{
                fontFamily:'RedHatDisplay-Regular',
                fontSize : 20,
                marginTop:20,
                marginLeft:5
            }}> 
                loading...
            </Text>
        </View>
    );
}

export default LoaderComponent;