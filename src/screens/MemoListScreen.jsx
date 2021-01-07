import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import LogoutButton from '../components/LogoutButton';

function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        onPress={() => { navigation.navigate('MemoCreate'); }}
        childStyle={styles.childStyle}
      >
        <Text>＋</Text>
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  childStyle: {
    color: '#fff',
  },
});

export default MemoListScreen;
