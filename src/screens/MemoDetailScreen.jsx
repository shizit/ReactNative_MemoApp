import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';

function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>

      <View style={styles.memoHeader}>
        <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
        <Text style={styles.memoHeaderDate}>Yesterday</Text>
      </View>

      <View style={styles.memoContent}>
        <Text style={styles.memoContentText}>
          講座のアイデアです。
        </Text>
      </View>

      <CircleButton
        onPress={() => { navigation.navigate('MemoEdit'); }}
        style={styles.editButton}
      >
        <Octicons name="pencil" size={24} color="#E31676" />
      </CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
  },

  memoHeader: {
    height: 100,
    padding: 10,
    backgroundColor: '#17313C',
    justifyContent: 'center',
  },

  memoHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },

  memoHeaderDate: {
    fontSize: 16,
    color: '#fff',
  },

  memoContent: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },

  memoContentText: {
    fontSize: 16,
  },

  editButton: {
    top: 75,
    backgroundColor: '#fff',
  },

});

export default MemoDetailScreen;
