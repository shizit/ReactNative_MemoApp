import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

  function MemoListScreen(props) {
    return (
      <View style={styles.container}>

          <MemoList/>
          <CircleButton>＋</CircleButton>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',

  },
});

export default MemoListScreen;