import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import CircleButton from '../elements/CircleButton';

  function MemoEditScreen(props) {
    return (

        <View style={styles.container}>
            <TextInput style={styles.memoEditInput} multiline value="Hi!" />

            <CircleButton>
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
    top:78,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  }
});

export default MemoEditScreen;