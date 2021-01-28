import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, LogBox, Alert,
} from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import LogoutButton from '../components/LogoutButton';
import Loading from '../components/Loading';

LogBox.ignoreLogs(['Setting a timer']);

function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      setLoading(true);
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
        setLoading(false);
      }, (error) => {
        setLoading(false);
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <MemoList memos={memos} />
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
