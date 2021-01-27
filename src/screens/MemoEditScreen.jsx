import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';
import { AntDesign } from '@expo/vector-icons';
import CircleButton from '../elements/CircleButton';

function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert(error.code);
        });
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={body}
        style={styles.memoEditInput}
        multiline
        onChangeText={(text) => { setBody(text); }}
      />
      <CircleButton
        onPress={handlePress}
      >
        <AntDesign name="check" size={24} color="white" />
      </CircleButton>

    </View>
  );
}
MemoEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};

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
