import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { shape, string } from 'prop-types';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton';
import { dateToString } from '../utils';

function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);
  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>

      <View style={styles.memoHeader}>
        <Text style={styles.memoHeaderTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoHeaderDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>

      <ScrollView style={styles.memoContent}>
        <Text style={styles.memoContentText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>

      <CircleButton
        onPress={() => { navigation.navigate('MemoEdit'); }}
        style={styles.editButton}
      >
        <Octicons name="pencil" size={24} color="#E31676" />
      </CircleButton>

    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
