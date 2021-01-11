import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';
import { AntDesign } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';

function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updateAt: new Date(),
    })
      .then((docRef) => {
        console.log('Created', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={bodyText}
        multiline
        style={styles.memoTitleInput}
        onChangeText={(text) => { setBodyText(text); }}
        autoFocus
      />
      <CircleButton
        onPress={handlePress}
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
  memoTitleInput: {
    padding: 16,
    fontSize: 20,
  },

});

export default MemoCreateScreen;
