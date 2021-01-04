import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function AppBar(props){
        return(
            <View style={styles.appbar}>
            <View>
              <Text style={styles.appbarTitle}>MEMOT</Text>
            </View>
          </View> 
        );
}

const styles = StyleSheet.create({

    appbar: {
        position: 'absolute',
        height: 78,
        top: 0,
        left: 0,
        right: 0,
        paddingTop:30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#265366', 
        //shadow ios only
        // shadowColor: '#000',
        // shadowOffset: {width: 0,height: 0},
        // shadowOpacity: 0.9,
        // shadowRadius: 3,
        //zIndex: 10,
    
        //shadow android only
        elevation: 10,
      },
      appbarTitle: {
        color: '#fff',
        fontSize: 18,
      },

});

export default AppBar;