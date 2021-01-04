import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CircleButton(props){
        const {style, color} = props;

        let bgColor = '#E31676';
        let textColor = '#fff';
        
        if(color === 'white'){
            bgColor = '#fff';
            textColor = '#E31676';
        }

        return(
            <View style={[styles.circleButton, style, {backgroundColor: bgColor}]}>
                <Text style={[styles.circleButtonText, {color: textColor}]}>{props.children}</Text>
            </View>
        ); 
}

const styles = StyleSheet.create({

    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 5, 
      },
    
      circleButtonText: {
        fontSize: 28,
      }


});


export default CircleButton;