import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <StatusBar style='auto' />
      </View>
      <View style={styles.appbar}>
      <View>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2021/01/02</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2021/01/02</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2021/01/02</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2021/01/02</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2021/01/02</Text>
        </View>

        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonText}>＋</Text>
          
        </View>
        
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appbar: {
    position: 'absolute',
    top: 0,
    height: 78,
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

  memoList: {
    paddingTop: 78,
    width: '100%',
    flex: 1,
  },

  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },

  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },

  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },

  memoAddButton: {
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

  memoAddButtonText: {
    fontSize: 28,
    color: '#fff',
  }
});
