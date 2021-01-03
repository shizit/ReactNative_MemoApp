import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import AppBar from './src/components/AppBar';

export default function App() {
  return (
    <View style={styles.container}>

        <StatusBar style='auto' />
        <AppBar/>
        <MemoListScreen />
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
});
