import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CircleButton(props){
        return(
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonText}>{props.children}</Text>
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
        backgroundColor: '#E31676',
        borderRadius: 50,
        elevation: 5, 
      },
    
      circleButtonText: {
        fontSize: 28,
        color: '#fff',
      }

});

export default CircleButton;