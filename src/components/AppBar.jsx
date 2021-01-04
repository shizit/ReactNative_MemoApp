import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function AppBar() {
  return (
    <View style={styles.appbar}>
      <View>
        <Text style={styles.appbarTitle}>MEMO</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  appbar: {
    height: 78,
    top: 0,
    left: 0,
    right: 0,
    bottom: 78,
    backgroundColor: '#265366',
    justifyContent: 'flex-end',
    // shadow ios only
    // shadowColor: '#000',
    // shadowOffset: {width: 0,height: 0},
    // shadowOpacity: 0.9,
    // shadowRadius: 3,
    // zIndex: 10,

    // shadow android only
    elevation: 10,
  },

  appbarTitle: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 8,
    lineHeight: 32,
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  appbarRight: {
    position: 'absolute',
    fontSize: 10,
    marginBottom: 8,
    right: 16,
    lineHeight: 32,
    color: 'rgba(255,255,255,0.8)',
  },

});

export default AppBar;
