import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';

function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TextInput style={styles.memoEditInput} multiline value="Hi!" />
      <CircleButton
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <AntDesign name="check" size={24} color="white" />
      </CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',

  },
  memoEditInput: {
    padding: 16,
    fontSize: 20,
  },

});

export default MemoEditScreen;
