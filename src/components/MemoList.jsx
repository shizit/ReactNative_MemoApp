import React from 'react';
import {
  Alert,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function MemoList() {
  const navigation = useNavigation();

  return (
    <View style={styles.memoList}>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2021/01/02</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => Alert.alert('Are you sure to delete?')}
        >
          <AntDesign name="close" size={20} color="#999" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2021/01/02</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => Alert.alert('Are you sure to delete?')}
        >
          <AntDesign name="close" size={20} color="#999" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2021/01/02</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => Alert.alert('Are you sure to delete?')}
        >
          <AntDesign name="close" size={20} color="#999" />
        </TouchableOpacity>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },

  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },

  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },

  memoDelete: {
    padding: 8,
  },

});

export default MemoList;
